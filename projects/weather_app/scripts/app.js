const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

// <img src="https://via.placeholder.com/400x300" class="time card-img-top" />
// <div class="icon bg-light mx-auto text-center">

const updateUI = (data) => {
 const { cityDets, weather } = data;

 //update details template
 details.innerHTML = `
 <h5 class="my-3">${cityDets.LocalizedName}</h5>
 <div class="my-3">${weather.WeatherText}</div>
 <div class="display-4 my-4">
   <span>temp</span>
   <span>${weather.Temperature.Metric.Value}.&deg;C</span>
 </div>
 `;

 // update the night/day and icon images
 let timeSrc = "";
 if (weather.IsDayTime === true) {
  timeSrc = `img/day.svg`;
 } else {
  timeSrc = `img/night.svg`;
 }
 let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
 time.setAttribute("src", timeSrc);
 icon.setAttribute("src", iconSrc);
 console.log(weather);

 // remove the d-none class if present
 if (card.classList.contains("d-none")) {
  card.classList.remove("d-none");
 }
};

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
  .then((data) => updateUI(data))
  .catch((err) => console.log(err));
});
