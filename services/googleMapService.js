const axios = require("axios");

async function geocodeAddress(address, apiKey) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = { geocodeAddress };
