const scores = [20, 10, 56, 15, 76, 85, 5];

const firstHighScore = scores.find((score) => {
 return score > 50; // either be true or false. When the first true occurs the loop stops so only one result
});

console.log(firstHighScore); //56
