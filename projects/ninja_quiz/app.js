const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const scoreEl = document.querySelector(".result .container p span");
form.addEventListener("submit", function (e) {
 e.preventDefault();
 let score = 0;
 const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

 //check user answes
 userAnswers.forEach(function (answer, index) {
  if (answer === correctAnswers[index]) {
   score += 25;
  }
 });
 if (score > 0) {
  window.scrollTo(0, 0);
  result.classList.remove("d-none");
  let output = 1;

  const timer = setInterval(function () {
   scoreEl.textContent = `${output}%`;
   if (output === score) {
    clearInterval(timer);
   } else {
    output++;
   }
  }, 10);
 } else {
  result.classList.add("d-none");
 }
});
