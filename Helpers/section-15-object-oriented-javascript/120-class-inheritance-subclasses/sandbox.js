// https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14241486#overview

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

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userOne = new User('mario', 'mario@email.com');
const userTwo = new User('luigi',  'luigi@email.com');
const userThree = new Admin('Peter',  'peter@email.com');

console.log(userOne);
console.log(userTwo);
console.log(userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
