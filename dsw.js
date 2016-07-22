//simple NodeJS weather getter for darksky forecast.io

var request = require('request');
var fs = require('fs');

var cities = {
    Mamaia: [44.2474119964217,28.628321899999946],
    Constanta: [44.18135768956809,28.62933905],
    EforieNord: [44.05979397997056, 28.632472649999954],
    Costinesti: [43.959190426232254, 28.637774349999972],
    Mangalia: [43.813007022020486, 28.566754400000036],
    VamaVeche: [43.75163695001963, 28.569205850000003]
};


var apiEndpoint = 'https://api.forecast.io/forecast/';
var apiKey      = 'a1e8b238a7079186703dc8429746331a';
var options     = 'units=si&exclude=alerts,flags';

cities.forEach
qString = apiEndpoint + apiKey + '/' + latitude +','+ longitude +'?'+ options;
console.log(qString);

var meteoData;

request(qString, function(error,response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        meteoData = JSON.parse(body);
        fs.writeFile("data.json", body, function(err) 
{            if (err) {
                return console.log(err);
            }
        });    
    }
});


