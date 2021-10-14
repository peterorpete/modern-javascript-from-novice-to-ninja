const cityForm = document.querySelector("form");
const updateCity = async (city) => {
 //  console.log(city);
 const cityDets = await getCity(city);
 const weather = await getWeather(cityDets.Key);

 // if property and value is the same you can just write it once as seen below (object hsorthand notation)
 //  cityDets: cityDets,
 //   weather: weather,
 return { cityDets, weather };
};
cityForm.addEventListener("submit", (e) => {
 //prevent default
 e.preventDefault();

 //get city value
 const city = cityForm.city.value.trim();
 cityForm.reset();

 //update the ui with new city
 updateCity(city)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
});
