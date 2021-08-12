let user = {
 name: "Peter",
 age: 38,
 email: "peter@emailaddress.com",
 location: "cornwall",
 likes: ["beer", "pizza", "Malaysia"],
 login: function () {
  // << this is a method of this object
  console.log("the user logged in");
 },
 logout: function () {
  // << this is a method of this object
  console.log("the user logged out");
 },
 logBlogs: function () {},
};
console.log(user.login);
console.log(user.logout);
