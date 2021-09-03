const products = [
 { name: "gold star", price: 30 },
 { name: "green shell", price: 10 },
 { name: "red shell", price: 40 },
 { name: "banana skin", price: 5 },
 { name: "mushroom", price: 50 },
];

//keeping products in new array that are over 20 price
// const filtered = products.filter((product) => product.price > 20);

// const promos = filtered.map((product) => {
//  return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
 .filter((product) => product.price > 20)
 .map((product) => {
  return `the ${product.name} is ${product.price / 2} pounds`;
 });

console.log(promos);
