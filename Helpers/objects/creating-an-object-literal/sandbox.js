let user = {
 name: "Peter",
 age: 38,
 email: "peter@emailaddress.com",
 location: "cornwall",
 likes: ["beer", "pizza", "Malaysia"],
};
console.log(user);

user.age = 39;
console.log(user);

console.log(user.age);
console.log(user["age"]);

user["name"] = "Paul";
console.log(user["name"]);

//Square brackets you can pass variables in.
//Dott notation you cant
const key = "location";
console.log(user[key]);

console.log(typeof user); //object
