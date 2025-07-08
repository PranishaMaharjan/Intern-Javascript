const game = {
  team1: "Bayern",
  team2: "Borrussia",
  players: [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    ["l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"],
  ],
  score: "4:0",
  scored: ["b", "d", "h", "i"],
  date: "Nov 19, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. DESTRUCTURING ARRAY
const [player1, player2] = game.players;
console.log(player1, player2);

// 2.
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allplayers = [...player1, ...player2];
console.log(`All the players:\n${allplayers}`);

// 4.
const add = new Array("w", " x", "z");
const player1final = [...player1, ...add];
console.log(player1final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
function printGoals(...playernames) {
  console.log(`${playernames}`);
  console.log(`${playernames.length} is the total score`);
}
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`team1 is more likely to win`);
team2 < team1 && console.log("team2 is more likely to win");
