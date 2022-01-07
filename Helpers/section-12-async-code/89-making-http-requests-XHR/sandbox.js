// https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14241318#overview

// This makes us a request object
const request = new XMLHttpRequest();

//* This event listener fires every time there is a state change in the request
request.addEventListener("readystatechange", () => {
 console.log(request);
 //* the readyStates will be either 0,1,2,3,4
 //  0 UNSENT
 //  1 OPENED
 //  2 HEADERS_RECEIVED
 //  3 LOADING
 //  4 DONE
 console.log(request.readyState);

 //* will console log the json data if the REQUEST is complete
 if (request.readyState === 4) {
  console.log(request.responseText);
 }
});

//* open method takes 2 arguments,
// - 1st is a string and is the type of request we want to make
// - 2nd is the end point, the data we want.
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//* send sends the request
request.send();
