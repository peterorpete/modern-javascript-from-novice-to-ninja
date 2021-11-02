// store data in local storage
localStorage.setItem('name', 'Peter');
localStorage.setItem('age', 39);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

//deleting data from local storage
// localStorage.removeItem('age');
localStorage.clear();