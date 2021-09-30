////
//* async and await
//https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14241350#notes
////

//async functions always return a Promise
//async is non blocking
const getTodos = async () => {
 const response = await fetch("todos/luigi.json"); //await stops something happening until the promise is resolved/complete
 const data = await response.json;
 return data;
};

// const test = getTodos();
// console.log(test); //Promise
console.log(1);
console.log(2);
getTodos().then((data) => console.log("resolved", data));
console.log(3);
console.log(4);
