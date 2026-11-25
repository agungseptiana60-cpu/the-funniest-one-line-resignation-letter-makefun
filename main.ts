import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest One-Line Resignation Letter — a cron job resigns.
// 133 characters, one line, no quotation marks around it.
// Sharper than the first draft: the 3 a.m. detail makes it a complaint
// only this cron job could make, and "unseen and unthanked" carries
// the tired, passive-aggressive voice in fewer words.
const line =
  "I have fired every minute since March, at 3 a.m. and on holidays, unseen and unthanked. I quit, and I am taking the schedule with me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
