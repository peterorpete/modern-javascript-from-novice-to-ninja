const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.thenetninja.co.uk");
link.textContent = "The Net Ninja webiste";

const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));

// only problem with setAttribute it overides whats was there before.
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color: green");
