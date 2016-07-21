//simple NodeJS weather getter for darksky forecast.io

var request = require('request');

var apiEndpoint = 'https://api.forecast.io/forecast/';
var apiKey      = 'a1e8b238a7079186703dc8429746331a';
var latitude    = '44.4322500';
var longitude   = '26.1062600'
var options     = 'units=si';

qString = apiEndpoint + apiKey + '/' + latitude +','+ longitude +'?'+ options;
console.log(qString);

request(qString, function(error,response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
