const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

button.addEventListener("click", () => {
 const li = document.createElement("li");
 li.textContent = "something new to do";
 //ul.appendChild(li);
 ul.prepend(li);
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//  item.addEventListener("click", (e) => {
//   console.log("event in li");
//   e.stopPropagation;
//   e.target.remove();
//  });
// });

ul.addEventListener("click", (e) => {
 //  console.log("event in UL");
 console.log(e.target);
 if (e.target.tagName === "LI") {
  e.target.remove();
 }
});
