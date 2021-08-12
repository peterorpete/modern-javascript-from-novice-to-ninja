// callbacks & forEach
// https://dmitripavlutin.com/foreach-iterate-array-javascript/
let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
 console.log(`${index} - hello ${person}`);
};

// people.forEach((person) => {
//  console.log(`hello ${person}`);
// });

//logPerson is the callback function
people.forEach(logPerson);
