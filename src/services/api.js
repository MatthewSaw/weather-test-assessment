import axios from 'axios';

function fetchWeatherApi (api:string, city:string) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'post',
        url: `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`,
      }).then((response) => {
        if (response.status === 200) {
          resolve(response);
        }
      }).catch((error) => {
        reject(error);
      });
    })
  }

export { fetchWeatherApi }