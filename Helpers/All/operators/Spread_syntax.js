// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

/////
// !https://scrimba.com/learn/introtoes6/spread-operator-cPkavntv
//* Example for arrays
/////

let contacts = ["Mary", "Joel", "Danny"];

// This would make a reference which could be wrong if want a copy
// let personalFriends = contacts;

/// The spread operator Makes a copy of contacts (not a reference);
let personalFriends = [...contacts];
let personalFriends2 = ["David", ...contacts, "Lily"];

contacts.push("John");

// So John wont go on personalFriends as not a reference
console.log(personalFriends); //[ 'Mary', 'Joel', 'Danny' ]
console.log(personalFriends2); //[ 'David', 'Mary', 'Joel', 'Danny', 'Lily' ]

/////
//* Example for objects
/////
let person = {
 name: "Adam",
 age: 25,
 city: "Manchester",
};

let employee = {
 ...person,
 salary: 50000,
 position: "Software Developer",
};

console.log(employee);
// {
//   name: 'Adam',
//   age: 25,
//   city: 'Manchester',
//   salary: 50000,
//   position: 'Software Developer'
// }
/////
