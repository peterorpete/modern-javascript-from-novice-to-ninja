//https://date-fns.org/

const now = new Date();

// console.log(dateFns.isToday(now));
// formating options

console.log(dateFns.format(now, "YYYY")); //2021
console.log(dateFns.format(now, "MMMM")); //September
console.log(dateFns.format(now, "MM")); //09
console.log(dateFns.format(now, "dddd")); //Thursday
console.log(dateFns.format(now, "Do")); //16th
console.log(dateFns.format(now, "dddd, Do MMMM, YYYY")); //Thursday, 16th September, 2021

//comparing dates

const before = new Date("November 23 1982 7:00:00");
console.log(dateFns.distanceInWords(now, before)); //about 39 years
console.log(dateFns.distanceInWords(now, before, { addSuffix: true })); //about 39 years ago
