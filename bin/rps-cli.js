#!/usr/bin/env node

import { playRPS } from "../lib/rps_game.js";
import minimist from "minimist";

const args = minimist(process.argv);
if (args.h || args.help) {
  console.log(`Usage: play-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  play-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  play-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
  process.exit();
}

if (args.r || args.rules) {
  console.log(`Rules for Rock Paper Scissors:
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);
  process.exit();
}

if (args._.length <= 2) {
  console.log(JSON.stringify(playRPS()));
} else if (args._.length > 3) {
  console.error("ERROR: arguments out of range");
} else {
  console.log(JSON.stringify(playRPS(...args._.slice(2))));
}
