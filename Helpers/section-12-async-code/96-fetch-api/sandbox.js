////
//* fetch api
//https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14241340#notes
////
fetch("todos/luigi.json")
 .then((response) => {
  console.log("resolve", response);
  return response.json();
 })
 .then((data) => {
  console.log(data);
 })
 .catch((err) => {
  console.log("rejected", err);
 });
