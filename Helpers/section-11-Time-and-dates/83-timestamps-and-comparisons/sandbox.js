// timestamps
const before = new Date("November 23 1982 7:30:45");
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);
const sec = Math.round(diff / 1000); // 1000 is miniseconds in a second
const mins = Math.round(diff / 1000 / 60); // 1000 is miniseconds in a second, then divide by 60 (minutes)
const hours = Math.round(mins / 60); //divide by 60 to get an hour
const days = Math.round(hours / 24);
console.log(mins, hours, days);

console.log(`i was born ${days} days / ${hours} hours / ${mins} minutes / ${sec} seconds ago `);

// converting timestamps into date object

const timestamp = 33293892382934;

console.log(new Date(timestamp));
console.log(new Date(before));
