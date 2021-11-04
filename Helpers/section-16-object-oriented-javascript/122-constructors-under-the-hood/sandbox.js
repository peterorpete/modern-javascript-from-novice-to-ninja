//constructor functions

function User(username, email){
  this.username = username;
  this.email = email;
  this.login = function() {
    console.log(`${this.username} has logged in`);
  };

}

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//   }
// }

const userOne = new User('mario', 'mario@email.com');
const userTwo = new User('luigi',  'luigi@email.com');

console.log(userOne);
console.log(userTwo);

// the 'new' key word
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructior function to 'build' the object

