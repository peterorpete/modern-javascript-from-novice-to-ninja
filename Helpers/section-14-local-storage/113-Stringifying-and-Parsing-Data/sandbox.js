const todos = [
  {text:'play mariokart', author:'shaun'},
  {text:'buy some milk', author:'mario'},
  {text:'buy some bread', author:'luigi'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

let store = localStorage.getItem('todos');
store = JSON.parse(store);
console.log(store);