console.log(1);
console.log(2);

setTimeout(() => {
 console.log("callback function fired"); //asynchronous code ( doesnt block the code)
}, 3000);

console.log(3);
console.log(4);

// 1 2 3 4 callback function fired
