class Weather {
  constructor(city) {
    this.apiKey = "1738c3a9ff09f1ddb5dcca73cb2c1c84";
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
