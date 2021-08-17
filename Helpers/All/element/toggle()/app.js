let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", function () {
 input.toggleAttribute("disabled");
});
