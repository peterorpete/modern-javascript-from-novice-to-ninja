// arguments & parameters

const speak = function (name = "luigi", time = "night") {
 console.log(`good ${time}, ${name}!`);
};

speak("mario", "morning"); //good morning, mario!
speak(); //good night, luigi!
speak("shaun"); //good night, shaun!
