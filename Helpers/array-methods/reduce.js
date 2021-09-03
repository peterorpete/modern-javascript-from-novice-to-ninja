////
//* Reduce method example 1
////
const scores = [20, 10, 56, 15, 76, 85, 5];

const results = scores.reduce((accumulator, current) => {
 if (current > 50) {
  accumulator++;
 }
 return accumulator;
}, 0); //0 is the initial value of the accumulator

console.log(results); //3

////
//* Reduce method example 2
////

const gameScores = [
 { player: "mario", score: 50 },
 { player: "yoshi", score: 30 },
 { player: "mario", score: 70 },
 { player: "crystal", score: 60 },
];

const marioScores = gameScores.reduce((acc, curr) => {
 if (curr.player === "mario") {
  acc += curr.score;
 }
 return acc;
}, 0);

console.log(marioScores);
