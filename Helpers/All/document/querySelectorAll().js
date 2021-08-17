// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//returns a nodelist so have to forEach through them
const paras = document.querySelectorAll("p");

paras.forEach((p) => {
 if (p.textContent.includes("error")) {
  p.classList.add("error");
 }
 if (p.textContent.includes("success")) {
  p.classList.add("success");
 }
});
