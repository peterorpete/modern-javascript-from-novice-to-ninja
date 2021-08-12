// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

let area = 7.7;
console.log(Math.round(area)); //8
area = 7.2;
console.log(Math.round(area)); //7

area = 7.8;
console.log(Math.floor(area)); //7 (rounds down whatever)

area = 6.1;
console.log(Math.ceil(area)); //7 (rounds up whatever)
area = 7.745;
console.log(Math.trunc(area)); //removes decimal i think

// random numbers

let random = Math.random(); // random is a decimal between 0 - 1
random = Math.round(random * 100); // rounds up between 1-100
console.log(random);
