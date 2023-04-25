function getRandomValue(rules) {
    const keys = Object.keys(rules);
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
  }
  
  const classicRules = {
    rock: ["paper"],
    paper: ["scissors"],
    scissors: ["rock"],
  };
  
  export function playClassicRockPaperScissors(playerChoice) {
    if (playerChoice === undefined) {
      return {
        player: getRandomValue(classicRules),
      };
    }
  
    if (!classicRules[playerChoice.toLowerCase()]) {
      console.log(`Rules for Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors`);
      process.exit(1);
    }
  
    const opponentChoice = getRandomValue(classicRules);
    const result = classicRules[playerChoice.toLowerCase()].includes(
      opponentChoice.toLowerCase()
    )
      ? "lose"
      : "win";
  
    return {
      player: playerChoice,
      opponent: opponentChoice,
      result: result,
    };
  }
  
  const advancedRules = {
    rock: ["paper", "spock"],
    paper: ["scissors", "lizard"],
    scissors: ["rock", "spock"],
    spock: ["lizard", "paper"],
    lizard: ["rock", "scissors"],
  };
  
  export function playAdvancedRockPaperScissors(playerChoice) {
    if (playerChoice === undefined) {
      return {
        player: getRandomValue(advancedRules),
      };
    }
  
    if (!advancedRules[playerChoice.toLowerCase()]) {
      console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors: 
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock SMOOSHES Lizard
      - Lizard POISONS Spock
      - Spock SMASHES Scissors
      - Scissors DECAPITATES Lizard
      - Lizard EATS Paper
      - Paper DISPROVES Spock
      - Spock VAPORIZES Rock
      - Rock CRUSHES Scissors`);
      process.exit(1);
    }
  
    const opponentChoice = getRandomValue(advancedRules);
    const result = advancedRules[playerChoice.toLowerCase()].includes(
      opponentChoice.toLowerCase()
    )
      ? "lose"
      : "win";
  
    return {
      player: playerChoice,
      opponent: opponentChoice,
      result: result,
    };
  }
  