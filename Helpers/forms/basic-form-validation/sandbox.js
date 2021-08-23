const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
 e.preventDefault();

 //validation
 const username = form.username.value;
 const usernamePattern = /^[a-zA-Z]{6,12}$/;
 const feedback = document.querySelector(".feedback");
 if (usernamePattern.test(username)) {
  // feedback good info
  feedback.textContent = "that username is valid!";
 } else {
  //feedback help
  feedback.textContent = "that username should be between 6 and 12 character long!";
 }
});
