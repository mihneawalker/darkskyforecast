//simple NodeJS weather getter for darksky forecast.io

var request = require('request');
var rp = require('request-promise');
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


function writeToFile(aFilename, aContent) {
  fs.writeFileSync(
    aFilename,
    aContent,
    {
      'flags': 'a'
    },
    function (aError) {
      console.error('File ' + aFilename + 'could not be written');
    }
  );
}

function getForecast(aUrl, aCity) {
  rp(aUrl).then(function (aSuccess) {
    console.log('Writing file: ' + aCity);
    var theFilename = 'data-' + aCity + '.json';
    writeToFile(theFilename, aSuccess);
  }, function (aError) {
    console.log("error", aError);
  });
}


for (var prop in cities) {
    if (cities.hasOwnProperty(prop)) {
        console.log(prop, cities[prop][0], cities[prop][1]);

        latitude  = cities[prop][0];
        longitude = cities[prop][1];

        var qString = apiEndpoint + apiKey + '/' + latitude +','+ longitude +'?'+ options;
        //console.log(qString);
        getForecast(qString, prop);
    }
}
