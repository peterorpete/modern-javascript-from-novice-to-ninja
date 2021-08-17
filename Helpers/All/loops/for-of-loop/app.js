// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
/////////
// * for of loop on arrays
/////////
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
 console.log(income);
 total += income;
}

// console.log(total);

/////////
// * for of loop on strings
/////////
let fullName = "Dylan Coding God Israel";

for (const char of fullName) {
 console.log(char);
}

/////////
// * example on arrays
/////////
const array1 = ["a", "b", "c"];

for (const element of array1) {
 console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

/////////
// * example on objects
/////////
// !https://scrimba.com/learn/introtoes6/for-of-loop-challenge-cGm9daUG
// Challenge - For Of Loop
// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
 { name: "John", city: "New York" },
 { name: "Peter", city: "Paris" },
 { name: "Kate", city: "Sidney" },
];
for (const student of students) {
 console.log(`${student.name} lives in ${student.city}`);
}
