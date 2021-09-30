// dates and times

const now = new Date();
console.log(now);
console.log(typeof now);

// year, months, days, time
console.log("getFullYear::", now.getFullYear());
console.log("getMonth:", now.getMonth());
console.log("getDate:", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

//timestamps
console.log("timestamp: ", now.getTime());

//date strings
console.log("toDateString: ", now.toDateString());
console.log("toTimeString: ", now.toTimeString());
console.log("toLocalString: ", now.toLocalString());
