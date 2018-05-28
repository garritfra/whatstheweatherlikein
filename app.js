#!/usr/bin/env node
const fetch = require("node-fetch");

if (process.argv.length != 3) {
  console.log(`Usage: ${process.argv[1]} <Cityname>`);
  return 1;
}

const city = process.argv[2];
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}`;
fetch(url)
  .then(response => response.json())
  .then(json => console.log(`The weather in ${city} is ${json.cod}`));
