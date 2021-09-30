// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
 if (scores[i] === 0) {
  continue; //skips rest of codeblock but goes to next iteration of the loop
 }

 console.log(`your score: ${scores[i]}`);

 if (scores[i] === 100) {
  console.log("congrats you got top score");
  break; //Ends the loop
 }
}

// your score: 50
// your score: 25
// your score: 30
// your score: 100
// congrats you got top score
