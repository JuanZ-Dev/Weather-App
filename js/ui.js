class UI {
  constructor() {
    this.container = document.querySelector(".container");
    this.error404 = document.querySelector(".not-found");
    this.weatherContainer = document.querySelector(".weather-container");
    this.weatherBox = document.querySelector(".weather-box");
    this.weatherBox2 = document.querySelector(".weather-box-2");
    this.location = document.querySelector(".city");
    this.date = document.querySelector(".date");
    this.description = document.querySelector(".description");
    this.temperature = document.querySelector(".temperature");
    this.humidity = document.querySelector(".weather-details .humidity span");
    this.wind = document.querySelector(".weather-details .wind span");
    this.image = document.querySelector(".img");
  }

  clock(timezone) {
    const dateUTC = new Date();
    const hoursUTC = dateUTC.getUTCHours();
    const minutesUTC = dateUTC.getUTCMinutes();

    const currentHour = timezone / 3600 + hoursUTC;
    const hour = currentHour < 1 ? 24 + currentHour : currentHour;
    const hours12 = hour % 12 || 12;
    const hr = hours12 < 10 ? "0" + hours12 : hours12;
    const min = minutesUTC < 10 ? "0" + minutesUTC : minutesUTC;
    const ampm = hour >= 12 && hour < 24 ? "PM" : "AM";

    return {
      hr: hr,
      min: min,
      ampm: ampm,
    };
  }

  weatherImage(cod, name) {
    this.image.innerHTML = "";
    bodymovin.loadAnimation({
      container: this.image,
      path: "https://assets10.lottiefiles.com/temp/lf20_" + cod + ".json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: name,
    });
  }

  render(weather) {
    if (weather.cod == "404") {
      this.container.style.height = "400px";
      this.weatherContainer.classList.add("fadeIn");
      this.weatherBox.style.display = "none";
      this.weatherBox2.style.display = "none";
      this.error404.style.display = "";
      this.error404.classList.add("show");
      return;
    }

    const { hr, min, ampm } = this.clock(weather.timezone);
    const icon = weather.weather[0]["icon"][2];
    let colorBack = "";
    let gradientBack = "";
    let colorText = "";

    if (icon == "d") {
      colorBack = "rgb(186,236,255)";
      gradientBack =
        "linear-gradient(0deg,rgba(186,236,255, 1) 18%,rgba(160,203,220, 1) 80%)";
      colorText = "#000";
    } else {
      colorBack = "rgb(12,76,115)";
      gradientBack =
        "linear-gradient(0deg,rgba(12,76,115, 1) 18%,rgba(8,52,79, 1) 80%)";
      colorText = "#fff";
    }

    this.error404.style.display = "none";
    this.error404.classList.remove("show");

    this.location.textContent = weather.name;
    this.date.textContent = "TODAY " + hr + ":" + min + " " + ampm;
    this.description.textContent = weather.weather[0]["description"];
    this.temperature.innerHTML = `${Math.round(
      weather.main.temp
    )}<span>°C</span>`;
    this.humidity.textContent = weather.main.humidity + " %";
    this.wind.textContent = weather.wind.speed.toFixed(1) + " m/s";

    this.weatherBox.style.display = "";
    this.weatherBox2.style.display = "";
    this.weatherContainer.classList.add("fadeIn");
    this.weatherContainer.style.background = colorBack;
    this.weatherContainer.style.background = gradientBack;
    this.weatherContainer.style.color = colorText;
    this.container.style.height = "645px";
    this.weatherBox.classList.add("show");
    this.weatherBox2.classList.add("show");

    const weatherMain = weather.weather[0]["main"];
    const weatherDesc = weather.weather[0]["description"];
    switch (weatherMain.toLowerCase()) {
      case "thunderstorm":
        this.weatherImage("XkF78Y", weatherMain);
        break;
      case "drizzle":
      case "rain":
        icon == "d"
          ? this.weatherImage("rpC1Rd", weatherMain)
          : this.weatherImage("I5XMi9", weatherMain);
        break;
      case "snow":
        icon == "d"
          ? this.weatherImage("BSVgyt", weatherMain)
          : this.weatherImage("RHbbn6", weatherMain);
        break;
      case "mist":
        this.weatherImage("kOfPKE", weatherMain);
        break;
      case "clear":
        icon == "d"
          ? this.weatherImage("Stdaec", weatherMain)
          : this.weatherImage("y6mY2A", weatherMain);
        break;
      case "clouds":
        if (weatherDesc == "few clouds") {
          icon == "d"
            ? this.weatherImage("dgjK9i", weatherMain)
            : this.weatherImage("Jj2Qzq", weatherMain);
        } else this.weatherImage("VAmWRg", weatherMain);
        break;
    }
  }
}
