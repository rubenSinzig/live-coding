const axios = require("axios");
const url = require("url");
// export class OpenWeatherClient
class OpenWeatherClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://api.openweathermap.org/data/2.5/";
  }
  get(endpoint) {
    const URL =
      url.resolve(this.baseUrl, endpoint) +
      `&units=metric&appid=${this.apiKey}`;
    return axios
      .get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => Promise.reject(err.response.data.message));
  }
  async getWeather(city, country) {
    let endpoint = `weather?q=${city}`;
    if (country) {
      endpoint += `,${country}`;
    }
    return await this.get(endpoint);
  }
}

// (450f -30) / 2 = c simple method to convert from Fahrenheit to Celsius (Not super accurate 😅)

// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.apiKey}

module.exports = OpenWeatherClient;
