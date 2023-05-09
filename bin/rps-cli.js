#!/usr/bin/env node

import { rps } from "../lib/rpsls.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2))
if (args.h || args.help) {
    console.log(
`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`)
    process.exit()
}
else if (args.r || args.rules) {
    console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`)
    process.exit()
}
else{
    let output = rps(args._[0])

    if (output != 'error') {
        console.log(JSON.stringify(output));
    }
    else {
        console.error(`${args._[0]} is out of range.`);
}
}

