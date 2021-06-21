// For Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("loop finished");

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  console.log(i); //0, 1, 2
  console.log(names[i]); //shaun, mario, luigi
  let html = `
  <div>
  ${names[i]}
  <div>`;
  console.log(html); //shaun, mario, luigi
}
