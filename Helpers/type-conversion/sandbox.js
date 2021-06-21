//type conversion
let score = "100";

score = Number(score); //converts to number
console.log(score + 1); //101
console.log(typeof score); //101

let result = Number("hello");
//cant convert stuff that defo aint a number
console.log(result); //NAN Not a number

result = String(50);
console.log(result, typeof result); //50, string

result = Boolean(100);
console.log(result, typeof result); //true, "boolean"

result = Boolean("0");
//Strings of any length are truthy
console.log(result, typeof result); //true, "boolean"
result = Boolean("");
//Strings of no length are falsey
console.log(result, typeof result); //false, "boolean"
