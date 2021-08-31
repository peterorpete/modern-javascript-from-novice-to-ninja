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
  result.classList.remove("d-none");
  scoreEl.textContent = `${score}%`;
 } else {
  result.classList.add("d-none");
 }
});
