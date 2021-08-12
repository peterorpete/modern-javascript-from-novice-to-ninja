let user = {
 name: "Peter",
 age: 38,
 email: "peter@emailaddress.com",
 location: "cornwall",
 likes: ["beer", "pizza", "Malaysia"],
 // dont use arrow functions when using this as it will use the global window.
 logLikes: function () {
  this.likes.forEach((blog) => {
   console.log(blog);
  });
 },
};

user.logLikes();
