/**
 * PROTOTYPE — canvas embed: empty ADE, canon lists only, no fiction seeds.
 */
import { useState } from "react";

type Mode = "scene" | "systems";
type SystemFace =
  | "types"
  | "attributes"
  | "stack"
  | "tags"
  | "catalogue"
  | "squad"
  | "gear"
  | "grid"
  | "frame"
  | "principal";

type TagNs = "Creature" | "Origin" | "Skill";
type Tag = { id: string; name: string; namespace: TagNs };
type CatRow = { id: string; name: string; domain: string };

const NAMESPACES: TagNs[] = ["Creature", "Origin", "Skill"];

const DAMAGE_TYPES = [
  { name: "Physical", category: "Physical", resonance: "Impact" },
  { name: "Tectonic", category: "Physical", resonance: "Tremor" },
  { name: "Inferno", category: "Primal-Elemental", resonance: "Combustion" },
  { name: "Voltaic", category: "Primal-Elemental", resonance: "Conductance" },
  { name: "Glacial", category: "Primal-Elemental", resonance: "Crystallization" },
  { name: "Tidal", category: "Primal-Elemental", resonance: "Undertow" },
  { name: "Eldergrove", category: "Biotic-Elemental", resonance: "Symbiosis" },
  { name: "Blight", category: "Biotic-Elemental", resonance: "Enchantment" },
  {
    name: "(unnamed)",
    category: "Biotic-Elemental",
    resonance: "—",
    tbd: true,
  },
  { name: "Psionic", category: "Phenomena", resonance: "Dominion" },
  { name: "Fae", category: "Phenomena", resonance: "Veil" },
  { name: "Phantom", category: "Phenomena", resonance: "Corrosion" },
] as const;

const ATTRIBUTES = ["Authority", "Invictus", "Animus", "Order"] as const;

const RAIL: { id: SystemFace; label: string; fog?: boolean }[] = [
  { id: "types", label: "Damage types" },
  { id: "attributes", label: "Attributes" },
  { id: "stack", label: "Channel → Stream → Tags" },
  { id: "tags", label: "Tags" },
  { id: "catalogue", label: "Mod Catalogue" },
  { id: "squad", label: "Squad / ownership" },
  { id: "gear", label: "Gear", fog: true },
  { id: "grid", label: "Motherboard Grid", fog: true },
  { id: "frame", label: "Skill Frame", fog: true },
  { id: "principal", label: "Principal", fog: true },
];

const DOMAINS = [
  "CreatureImplicit",
  "CreatureMod",
  "SkillMod",
  "GearExplicit",
];

export function App() {
  const [mode, setMode] = useState<Mode>("systems");
  const [face, setFace] = useState<SystemFace>("types");
  const [tags, setTags] = useState<Tag[]>([]);
  const [catalogue, setCatalogue] = useState<CatRow[]>([]);
  const [tagName, setTagName] = useState("");
  const [tagNs, setTagNs] = useState<TagNs>("Creature");
  const [modName, setModName] = useState("");
  const [modDomain, setModDomain] = useState(DOMAINS[0]!);
  const [log, setLog] = useState<string[]>([
    "Empty editor. Damage types are the first real list.",
  ]);

  const note = (msg: string) => setLog((prev) => [msg, ...prev].slice(0, 10));

  const addTag = () => {
    const name = tagName.trim();
    if (!name) return;
    const id = `tag-${name.toLowerCase().replace(/\s+/g, "-")}`;
    if (tags.some((t) => t.id === id)) return;
    setTags((list) => [...list, { id, name, namespace: tagNs }]);
    setTagName("");
    note(`Authored tag ${name}`);
  };

  const addMod = () => {
    const name = modName.trim();
    if (!name) return;
    const id = `mod-${name.toLowerCase().replace(/\s+/g, "-")}`;
    if (catalogue.some((m) => m.id === id)) return;
    setCatalogue((list) => [...list, { id, name, domain: modDomain }]);
    setModName("");
    note(`Authored catalogue row ${name}`);
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-name">Mythoras ADE</span>
          <span className="brand-sentence">
            {mode === "systems" ? "dictionary of rules" : "zone grammar parked"}
          </span>
        </div>
        <div className="mode-switch" role="tablist" aria-label="Mode">
          <button
            type="button"
            className="mode-btn"
            aria-pressed={mode === "scene"}
            onClick={() => {
              setMode("scene");
              note("Scene parked — OD-009");
            }}
          >
            Scene
          </button>
          <button
            type="button"
            className="mode-btn"
            aria-pressed={mode === "systems"}
            onClick={() => {
              setMode("systems");
              note("Systems");
            }}
          >
            Systems
          </button>
        </div>
        <div className="throwaway-tag">throwaway · no seeds</div>
      </header>

      <div className="workspace">
        {mode === "systems" ? (
          <>
            <nav className="rail" aria-label="Systems">
              <div className="rail-label">Systems</div>
              <ul className="rail-list">
                {RAIL.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="rail-item"
                      aria-current={face === item.id}
                      onClick={() => {
                        setFace(item.id);
                        note(item.label);
                      }}
                    >
                      {item.label}
                      {item.fog ? <span className="fog-mark"> fog</span> : null}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="stage">
              {face === "types" && <TypesFace />}
              {face === "attributes" && <AttributesFace />}
              {face === "stack" && <StackFace tagCount={tags.length} />}
              {face === "tags" && (
                <TagsFace
                  tags={tags}
                  tagName={tagName}
                  tagNs={tagNs}
                  onName={setTagName}
                  onNs={setTagNs}
                  onAdd={addTag}
                />
              )}
              {face === "catalogue" && (
                <CatalogueFace
                  rows={catalogue}
                  modName={modName}
                  modDomain={modDomain}
                  onName={setModName}
                  onDomain={setModDomain}
                  onAdd={addMod}
                />
              )}
              {face === "squad" && <SquadFace />}
              {face === "gear" && (
                <FogFace
                  title="Gear"
                  body="A kit on each creature. Slot count is not decided. Do not treat six slots as canon."
                />
              )}
              {face === "grid" && (
                <FogFace
                  title="Motherboard Grid"
                  body="One Technician tree: a global route for the whole Squad, plus five slot-local branches. Topology is not designed. Foundations (Warlord, Bladedancer, Architect, Channeler) start you on this tree — when it exists."
                />
              )}
              {face === "frame" && (
                <FogFace
                  title="Skill Frame"
                  body="Each creature’s skills, with supports on each active. Support count is open. Not a Technician tree."
                />
              )}
              {face === "principal" && (
                <FogFace
                  title="Principal"
                  body="About three or four single-stage choices per species. Changes how that creature plays. Configuration is open. No species authored yet."
                />
              )}
            </div>
          </>
        ) : (
          <div className="stage scene-stage">
            <div className="face-head scene-park">
              <h1>Scene</h1>
              <p>
                A Zone is a place in the campaign world. Fixture grammar is
                still open (OD-009). There is no tile generator here.
              </p>
            </div>
          </div>
        )}
      </div>

      <footer className="statebar">
        <span className="log">{log[0]}</span>
        <span className="muted">
          {mode === "systems" ? face : "scene parked"}
        </span>
      </footer>
    </div>
  );
}

function TypesFace() {
  return (
    <div className="face">
      <header className="face-head">
        <h1>Damage types</h1>
        <p>
          Eleven named types. Category is shorthand only — not a matchup chart.
          The chart itself is still open. Resonance names are listed, not
          simulated.
        </p>
      </header>
      <table className="cat-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Category</th>
            <th>Tier 2 Resonance</th>
          </tr>
        </thead>
        <tbody>
          {DAMAGE_TYPES.map((t) => (
            <tr key={t.name}>
              <td>{t.tbd ? <span className="muted">{t.name}</span> : t.name}</td>
              <td>{t.category}</td>
              <td>{t.resonance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AttributesFace() {
  return (
    <div className="face">
      <header className="face-head">
        <h1>Attributes</h1>
        <p>The main stat face. Other substats feed from these. Not types.</p>
      </header>
      <ul className="plain-list">
        {ATTRIBUTES.map((a) => (
          <li key={a} className="attr-row">
            <span className="attr-name">{a}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StackFace({ tagCount }: { tagCount: number }) {
  return (
    <div className="face">
      <header className="face-head">
        <h1>Channel → Stream → Tags</h1>
        <p>Locked architecture. Channel is not a defence schema.</p>
      </header>
      <ol className="stack-layers">
        <li>
          <h2>Channel</h2>
          <p>
            Attribute scaling navigation on the Grid, and modifier/tag
            shorthand. Not “what defence applies.”
          </p>
        </li>
        <li>
          <h2>Stream</h2>
          <p>
            The eleven damage types. What a hit is, and what a creature is
            defensively.
          </p>
        </li>
        <li>
          <h2>Tags</h2>
          <p>
            Third interaction layer, public on a creature. {tagCount} authored
            {tagCount === 0 ? " — empty until you add one." : "."}
          </p>
        </li>
      </ol>
    </div>
  );
}

function TagsFace({
  tags,
  tagName,
  tagNs,
  onName,
  onNs,
  onAdd,
}: {
  tags: Tag[];
  tagName: string;
  tagNs: TagNs;
  onName: (v: string) => void;
  onNs: (v: TagNs) => void;
  onAdd: () => void;
}) {
  return (
    <div className="face">
      <header className="face-head">
        <h1>Tags</h1>
        <p>
          Short shared vocabulary. Empty on purpose. Add a row when you mean
          it — Winged is a real first candidate, not a preload.
        </p>
      </header>
      <div className="ns-grid">
        {NAMESPACES.map((ns) => (
          <section key={ns} className="ns-col">
            <h2>{ns}</h2>
            <ul>
              {tags.filter((t) => t.namespace === ns).length === 0 ? (
                <li className="muted">None</li>
              ) : (
                tags
                  .filter((t) => t.namespace === ns)
                  .map((t) => <li key={t.id}>{t.name}</li>)
              )}
            </ul>
          </section>
        ))}
      </div>
      <form
        className="add-row"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd();
        }}
      >
        <input
          value={tagName}
          placeholder="tag name"
          onChange={(e) => onName(e.target.value)}
        />
        <select value={tagNs} onChange={(e) => onNs(e.target.value as TagNs)}>
          {NAMESPACES.map((ns) => (
            <option key={ns} value={ns}>
              {ns}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function CatalogueFace({
  rows,
  modName,
  modDomain,
  onName,
  onDomain,
  onAdd,
}: {
  rows: CatRow[];
  modName: string;
  modDomain: string;
  onName: (v: string) => void;
  onDomain: (v: string) => void;
  onAdd: () => void;
}) {
  return (
    <div className="face">
      <header className="face-head">
        <h1>Mod Catalogue</h1>
        <p>
          Empty inventory. Affix rules (prefix/suffix vs other) are not
          decided. Domains are labels only.
        </p>
      </header>
      <table className="cat-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={2} className="muted">
                No rows.
              </td>
            </tr>
          ) : (
            rows.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.domain}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <form
        className="add-row"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd();
        }}
      >
        <input
          value={modName}
          placeholder="mod name"
          onChange={(e) => onName(e.target.value)}
        />
        <select
          value={modDomain}
          onChange={(e) => onDomain(e.target.value)}
        >
          {DOMAINS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function SquadFace() {
  return (
    <div className="face">
      <header className="face-head">
        <h1>Squad / ownership</h1>
        <p>Grammar only. No named creatures.</p>
      </header>
      <div className="slot-stack">
        <section className="slot-card">
          <h2>Technician</h2>
          <p className="muted">
            Motherboard Grid, Command Deck, Lanes, Warbanner. Not Skill Cards.
          </p>
        </section>
        <section className="slot-card">
          <h2>Creature</h2>
          <p className="muted">
            Skill Frame, Skill Cards, supports, gear, Principal. Local to that
            creature.
          </p>
        </section>
        <section className="slot-card">
          <h2>Slot</h2>
          <p className="muted">
            Five slot-local Grid branches. Bonuses follow the slot, not the
            creature entity.
          </p>
        </section>
        <section className="slot-card">
          <h2>Squad</h2>
          <p className="muted">
            Five into a zone: three Field, two Bench. Locked on entry.
          </p>
        </section>
      </div>
    </div>
  );
}

function FogFace({ title, body }: { title: string; body: string }) {
  return (
    <div className="face">
      <header className="face-head">
        <h1>{title}</h1>
        <p>{body}</p>
      </header>
    </div>
  );
}
