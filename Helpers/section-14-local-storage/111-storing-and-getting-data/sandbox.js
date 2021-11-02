// store data in local storage
localStorage.setItem('name', 'Peter');
localStorage.setItem('age', 39);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age); /// Peter 39

//update data
localStorage.setItem('name', 'Lidwina')
name = localStorage.getItem('name');
// can also use dott notation
localStorage.age = '38';
age = localStorage.getItem('age');

console.log(name, age); /// Lidwina 38
