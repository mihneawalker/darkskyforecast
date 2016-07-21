
var request = require('request');

qString = 'https://api.forecast.io/forecast/a1e8b238a7079186703dc8429746331a/44.4322500,26.1062600?units=si';

request(qString, function(error,response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});



