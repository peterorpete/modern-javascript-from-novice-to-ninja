// booleans and comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = "luigi@thenetninja.co.uk";
let names = ["mario", "luigi", "toad"];

let result = email.includes("@");
console.log(result); // true
result = names.includes("luigi");
console.log(result); // true
result = names.includes("bowser");
console.log(result); // fals

//comparison operators
let age = 25;
console.log(age == 25); // true
console.log(age == 30); // false
console.log(age != 35); // true
console.log(age > 35); // false
console.log(age < 25); // false
console.log(age <= 25); // true
console.log(age >= 25); // true

let name = "shaun";
console.log(name == "shaun"); //true
console.log(name == "Shaun"); //false
console.log(name > "crystal"); //true (as S is later than c in alphabet);
console.log(name > "Shaun"); //true (lowercase letter is greater than upper case letter)
console.log(name > "Crystal"); //true (as all lowercase letter higher than any uppercase letters)
