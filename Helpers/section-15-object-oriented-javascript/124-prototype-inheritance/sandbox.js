function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function() {
  console.log(`${this.username} has logged in`);
  return this;
};
User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin (username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function() {
  //delete user
}
const userOne = new User('mario', 'mario@email.com');
const userTwo = new User('luigi',  'luigi@email.com');
const userThree = new Admin('Peter',  'Peter@email.com', 'Dude');

console.log(userOne);
console.log(userTwo);
console.log(userThree);
userTwo.login();
userOne.login();