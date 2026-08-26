import { createRoot, type Root } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

declare global {
  // eslint-disable-next-line no-var
  var __adeRoot: Root | undefined;
}

if ("__TAURI_INTERNALS__" in window) {
  document.documentElement.classList.add("tauri");
}

const el = document.getElementById("root");
if (!el) throw new Error("#root missing");

const root = globalThis.__adeRoot ?? createRoot(el);
globalThis.__adeRoot = root;
root.render(<App />);
