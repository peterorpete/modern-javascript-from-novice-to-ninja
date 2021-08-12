let ninjas = ["shaun", "ryu", "chun-li"];
console.log(ninjas);
console.log(ninjas[1]); // ryu
ninjas[1] = "ken";
console.log(ninjas[1]); // ken

let ages = [20, 25, 30, 35];
console.log(ages[2]); //30

let random = ["shaun", "crystal", 30, 20];
console.log(random);

console.log(ninjas.length); //3

//Array methods
let joinExample = ninjas.join(", ");
console.log(joinExample); //shaun, ken, chun-li

let indexOfExample = ninjas.indexOf("chun-li");
console.log(indexOfExample); //2

let concatExample = ninjas.concat(["Barry", "crystal"]);
console.log(concatExample); //["shaun", "ken", "chun-li", "Barry", "crystal"]

let pushExample = ninjas.push("Larry");
console.log(pushExample); //4 (alters the orginal value)
console.log(ninjas); //["shaun", "ken", "chun-li", "Larry"]

let popExample = ninjas.pop();
console.log(popExample); //Larry
console.log(ninjas); //["shaun", "ken", "chun-li"]

// https://github.com/iamshaunjp/modern-javascript/blob/lesson-13/chapter_2/sandbox.js
