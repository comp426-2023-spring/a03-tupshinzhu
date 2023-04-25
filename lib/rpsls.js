// Define a function that takes a rules object and returns a random key
function getRandomKey(rules) {
    const keys = Object.keys(rules);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  }
  
  // Define the rules for the Rock, Paper, Scissors game
  const RPS_RULES = {
    rock: ["paper"],
    paper: ["scissors"],
    scissors: ["rock"],
  };
  
  // Define a function that plays the Rock, Paper, Scissors game
  function playRPS(playerChoice) {
    // If no player choice is provided, select a random choice
    if (!playerChoice) {
      playerChoice = getRandomKey(RPS_RULES);
    }
  
    // If the player choice is not valid, print the rules and exit the program
    if (!RPS_RULES[playerChoice]) {
      console.log(
        `Invalid choice. The rules of the game are:\nRock beats Scissors, Scissors beat Paper, Paper beats Rock.`
      );
      process.exit(1);
    }
  
    // Select a random choice for the opponent
    const opponentChoice = getRandomKey(RPS_RULES);
  
    // Determine the result of the game
    const result =
      RPS_RULES[playerChoice].includes(opponentChoice) ? "lose" : "win";
  
    // Return an object containing the player and opponent choices and the result
    return {
      player: playerChoice,
      opponent: opponentChoice,
      result,
    };
  }
  
  // Define the rules for the Rock, Paper, Scissors, Lizard, Spock game
  const RPSP_RULES = {
    rock: ["paper", "spock"],
    paper: ["scissors", "lizard"],
    scissors: ["rock", "spock"],
    spock: ["lizard", "paper"],
    lizard: ["rock", "scissors"],
  };
  
  // Define a function that plays the Rock, Paper, Scissors, Lizard, Spock game
  function playRPSP(playerChoice) {
    // If no player choice is provided, select a random choice
    if (!playerChoice) {
      playerChoice = getRandomKey(RPSP_RULES);
    }
  
    // If the player choice is not valid, print the rules and exit the program
    if (!RPSP_RULES[playerChoice]) {
      console.log(
        `Invalid choice. The rules of the game are:\nRock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock.`
      );
      process.exit(1);
    }
  
    // Select a random choice for the opponent
    const opponentChoice = getRandomKey(RPSP_RULES);
  
    // Determine the result of the game
    const result =
      RPSP_RULES[playerChoice].includes(opponentChoice) ? "lose" : "win";
  
    // Return an object containing the player and opponent choices and the result
    return {
      player: playerChoice,
      opponent: opponentChoice,
      result,
    };
  }
  