// The Most Boring Object, Reviewed in One Line — make.fun bounty entry.
// Writes the single one-line review (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the magnet's long, thankless service
// record (drawings, invites, eviction notice, three fridges, nine years),
// then the reversal — nobody ever thanked it, and it just keeps holding on.
const SETUP =
  "This fridge magnet has held up 214 school drawings, three wedding invites and one eviction notice across three fridges and nine years, ";
const PUNCH = "and nobody has ever once thanked it — it just keeps holding on.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 1–200, not 199

// Guard: the gate counts characters, so validate in code before writing.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > CHAR_LIMIT) {
    throw new Error(`line is ${line.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (line !== line.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("line must stay on one line");
  }
}

function main(): void {
  validateLine(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
