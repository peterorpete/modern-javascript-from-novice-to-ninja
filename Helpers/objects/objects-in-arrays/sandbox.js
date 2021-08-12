let user = {
 name: "Peter",
 age: 38,
 email: "peter@emailaddress.com",
 location: "cornwall",
 blogs: [
  { title: "why mac and cheese rules", likes: 30 },
  { title: "10 things to make with marmite", likes: 20 },
 ],
 logBlogs: function () {
  let div = document.querySelector("div");
  let html = "";
  this.blogs.forEach((blog) => {
   div.innerHTML += `<div>Book title: <strong>${blog.title}</strong>. <br> Likes <strong>${blog.likes}</strong><br><br> </div>`;
  });
 },
};

user.logBlogs();
