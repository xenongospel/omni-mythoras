#!/usr/bin/env bash
#
# Pull scene-distinct frames out of reference gameplay videos.
#
# Output lands in apps/mythoras-client-prototype/reference/<surface>/frames-<slug>/
# which .gitignore excludes -- these are third-party frames for local design
# reference only and must never be committed. This repository is public.
#
# Downloads only the requested segment of each video, not the whole thing.
# Frames are chosen by scene-change detection rather than a fixed interval, so
# you get distinct scenes instead of 400 near-identical combat frames.
#
#   ./scripts/grab-reference-frames.sh
#
# Requires yt-dlp and ffmpeg.

set -uo pipefail
cd "$(dirname "$0")/.."

REF="apps/mythoras-client-prototype/reference"
WORK="/tmp/mythref/video"
mkdir -p "$WORK"

# id | surface folder | slug | start-end (seconds) | scene threshold | max frames
JOBS=(
  "FU4pTUaGkjs|gameview-mop|mop-15sec-trailer|0-14|0.20|40"
  "lOVcNw5GSJM|gameview-mop|mop-hideout-world-battle|0-900|0.40|90"
  "z8jUDvQRlcw|console-dd1|dd1-shambler-fight|0-324|0.35|60"
  "2OUXuVz3EbA|console-dd1|dd1-fires-edge-opening|0-480|0.35|70"
)

for job in "${JOBS[@]}"; do
    IFS='|' read -r id surface slug span thresh maxf <<< "$job"
    out="$REF/$surface/frames-$slug"
    vid="$WORK/$slug.mp4"

    echo "=============================================================="
    echo "[$slug] surface=$surface span=${span}s"

    if [ ! -f "$vid" ]; then
        echo "[$slug] downloading segment ${span}s ..."
        yt-dlp --no-warnings --quiet --no-progress \
            -f "bestvideo[height<=1080][ext=mp4]/best[height<=1080]" \
            --download-sections "*${span}" \
            -o "$vid" \
            "https://www.youtube.com/watch?v=$id" || { echo "[$slug] DOWNLOAD FAILED"; continue; }
    else
        echo "[$slug] segment already on disk, reusing"
    fi

    [ -f "$vid" ] || { echo "[$slug] no file, skipping"; continue; }

    mkdir -p "$out"
    rm -f "$out"/*.jpg 2>/dev/null

    echo "[$slug] extracting scene-distinct frames (threshold $thresh) ..."
    # yuvj420p + fps_mode vfr: current ffmpeg refuses limited-range YUV into mjpeg
    # without this, and -vsync is removed. Scene select still under-fires on
    # slow UI footage; the timed backfill below covers that.
    ffmpeg -loglevel error -y -i "$vid" \
        -vf "select='gt(scene,${thresh})',scale=1920:-2,format=yuvj420p" \
        -fps_mode vfr -frames:v "$maxf" -q:v 2 \
        "$out/scene_%03d.jpg"

    n=$(ls "$out"/scene_*.jpg 2>/dev/null | wc -l | tr -d ' ')

    # Scene detection can under-fire on slow, static UI footage. Backfill on a
    # timer so a mostly-static hideout or menu still gets sampled.
    if [ "$n" -lt 12 ]; then
        echo "[$slug] only $n scene frames; backfilling on a 20s interval ..."
        ffmpeg -loglevel error -y -i "$vid" \
            -vf "fps=1/20,scale=1920:-2,format=yuvj420p" -frames:v 40 -q:v 2 \
            "$out/timed_%03d.jpg"
    fi

    nfiles=$(ls -1 "$out" 2>/dev/null | wc -l | tr -d ' ')
    echo "[$slug] DONE -> $out ($nfiles files)"
done

echo "=============================================================="
echo "ALL JOBS COMPLETE"
find "$REF" -name 'frames-*' -type d | while read -r d; do
    echo "$(ls -1 "$d" | wc -l | tr -d ' ') frames  $d"
done
