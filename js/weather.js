class Weather {
  constructor(city) {
    this.apiKey = "Your API key";
    this.city = city;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }
}
