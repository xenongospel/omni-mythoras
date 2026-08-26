#!/usr/bin/env bash
#
# Verify every relative markdown link between documents resolves.
#
# The root documents are densely cross-linked -- around 200 relative links at
# the time of writing -- so moving a file into docs/ breaks links in two
# directions: links pointing at it, and links inside it pointing back out.
# Run this after any move, and before pushing a docs reorganisation.
#
#   ./scripts/check-doc-links.sh
#
# Exits non-zero if any link is dangling, so it can gate a commit.

set -uo pipefail
cd "$(dirname "$0")/.."

broken=0
total=0

while IFS= read -r line; do
    file="${line%%:*}"
    link="${line#*:}"
    dir=$(dirname "$file")
    total=$((total + 1))
    if [ ! -e "$dir/$link" ]; then
        echo "BROKEN  $file  ->  $link"
        broken=$((broken + 1))
    fi
done < <(
    rg -o --no-heading --with-filename \
       '\]\(([^)#:]+\.(?:md|xml))\)' -r '$1' \
       --glob '!.git' --glob '!node_modules' . 2>/dev/null
)

echo "---"
echo "checked=$total broken=$broken"

[ "$broken" -eq 0 ] || exit 1
