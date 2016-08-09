var testString = 'https://api.forecast.io/forecast/a1e8b238a7079186703dc8429746331a/44.2474119964217,28.628321899999946?units=si&exclude=alerts,flags;'

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

for (var prop in cities) {
    if (cities.hasOwnProperty(prop)) {
        console.log(prop, cities[prop][0], cities[prop][1]);

        latitude  = cities[prop][0];
        longitude = cities[prop][1];
        baseUrl = 'https://api.forecast.io/forecast/a1e8b238a7079186703dc8429746331a/'+ latitude+','+longitude;

        var options = {
        	method: 'GET',
        	uri : baseUrl,
            qs: { 
                units: 'si',
                exclude: 'alerts,flags'
                }
            }
	

        rp(options).then(function (response) {
            fName = 'city_'+prop+'.json';
            fs.writeFile(fName, response, {'flags':'a'}); 
            // var meteoData = JSON.parse(response);
            // console.log(meteoData);
            // console.log(response);
        })
        .catch( function (err) {
            console.error(err.error.message, err.options.uri)
        })
        ;

}
}