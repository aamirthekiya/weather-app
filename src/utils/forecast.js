const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=542d556268ceacb8d6f69afb90e775b2&query=${latitude}, ${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Coudn't connect --- weatherstack");
    } else if (response.body.error) {
      callback("Something went wrong --- weatherstack");
    } else {
      callback(
        undefined,
        `Current temperature is ${response.body.current.temperature} and humidity is ${response.body.current.humidity}`
      );
    }
  });
};

module.exports = forecast;
