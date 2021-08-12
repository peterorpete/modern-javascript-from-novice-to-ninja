const ul = document.querySelector("ul");

let html = ``;
let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

people.forEach((person, index) => {
 html += `<li style ="color:purple">${person}</li></li>`;
});
ul.innerHTML = html;
