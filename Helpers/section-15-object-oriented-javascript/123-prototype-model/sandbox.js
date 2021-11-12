//constructor functions

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
const userOne = new User('mario', 'mario@email.com');
const userTwo = new User('luigi',  'luigi@email.com');

console.log(userOne);
console.log(userTwo);
userTwo.login();
userOne.login();