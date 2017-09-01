const https = require('https');
const http = require('http');
const weatherApi = require('./api.json');


// Print Error Messages
function printError(error) {
	console.error(error.message);
}
// https://openweathermap.org/current
function getWeather(city) {
	try { // http://api.openweathermap.org/data/2.5/weather?units=imperial&q=tampa.json&APPID=ec9d435c91a19b4eaaa33303758d378c
		const request = http.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city},US.json&APPID=${weatherApi.key}`, response => {
		console.dir(response.statusCode);
			if (response.statusCode == 200){
				let body = "";
				// Read the data
				response.on('data', data => {
					body += data.toString();
				});

				response.on('end', () => {
					try {
						// Parse the data
						const weatherReport = JSON.parse(body);
						console.dir(weatherReport);
						// Print the data
							console.log(`${city}, high of ${weatherReport.main.temp_max} and low of ${weatherReport.main.temp_min}.`);

					} catch (error) {
						printError(error);
					}
				});
			} else {
				const message = `There was an error getting the weather for  ${city} (${http.STATUS_CODES[response.statusCode]})`;
				const statusCodeError  = new Error(message);
				printError(statusCodeError);
			}
		});


	request.on('error', error => console.error(`Problem with request: ${error.message}`));
	} catch (error) {
		printError(error);
	}


}
// getWeather("Tampa");

const city = process.argv.slice(2)
getWeather(city);
