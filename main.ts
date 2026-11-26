// One-Liner Laughs: one joke, judged pairwise by a comedy judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The setup is an everyday smart-home annoyance; the payoff is the house's
// cold, bureaucratic logic: it correctly detects the owner is "away" and
// offers the mode for it, blind to the fact that it caused the situation.
// Judge's order: setup+payoff first, then laugh, surprise, freshness, economy.
const LINE =
  "My smart home locked me out. As I stood freezing on the porch, it asked if I'd like to activate Away Mode.";

const chars = Array.from(LINE);
if (chars.length < 1 || chars.length > 200) throw new Error("line out of range");
if (LINE !== LINE.trim()) throw new Error("line has outer whitespace");
if (Buffer.byteLength(LINE, "utf8") > 800) throw new Error("line too many bytes");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
