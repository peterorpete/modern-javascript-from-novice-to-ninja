class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  // dont use arrow functions as arrow functions dont bind the this keyword
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score ++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User('mario', 'mario@email.com');
const userTwo = new User('luigi',  'luigi@email.com');

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();
userOne.incScore();
userOne.login().incScore().incScore().incScore().incScore().logout(); // need to return this in order to chain together methods

// the 'new' key word
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructior function to 'build' the object

