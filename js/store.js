class Store {
  constructor() {
    this.city;
  }

  getLocationData() {
    this.city = localStorage.getItem("city");
    return this.city;
  }

  setLocationData(city) {
    localStorage.setItem("city", city);
  }
}
