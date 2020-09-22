const request = require("postman-request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYWFtaXJ0aGVraXlhMSIsImEiOiJja2Y3MXliODkxMjNrMnNubzMyNzBjenN4In0.49g9319ts_QKbSEJhKv4sg&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    // Responce is not there because we used object destructuring shorthand.
    if (error) {
      callback("Could not connect --- mapbox");
    } else if (body.features.length === 0) {
      callback("Something went wrong --- mapbox");
    } else {
      data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      };

      callback(undefined, data);
    }
  });
};

module.exports = geoCode;
