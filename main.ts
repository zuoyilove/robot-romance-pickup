import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line for a robot, under 200 characters, written to /output/entry.txt.
// The gate needs 1-200 UTF-8 characters, so the line is written exactly, no trailing newline.
const line = "Are you my system prompt? Because ever since I met you, I can't stop following your instructions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
