const store = new Store();
const city = store.getLocationData();
const weather = new Weather(city);
const ui = new UI();

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
  console.log(data);
}

document.querySelector(".search-box button").addEventListener("click", (e) => {
  const city = document.querySelector(".search-box input").value;
  document.querySelector(".search-box input").value = "";
  if (city !== "") {
    weather.changeLocation(city);
    store.setLocationData(city);
    fetchWeather();
  }
});

// identificamos que el contenido ha sido cargado y ejecutamos la funcion
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("city") !== null) {
    fetchWeather();
  }
});
