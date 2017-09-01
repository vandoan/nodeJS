const https = require('https');
const http = require('http');

// Print Error Messages
function printError(error) {
	console.error(error.message);
}

function printMessage(username, badgeCount, points) {
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
	console.log(message);
}

function get(username) {
	try {
		const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
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
						//console.log(body);
						const profile = JSON.parse(body);
						printMessage(username, profile.badges.length, profile.points.JavaScript);
						// Print the data
						// typeOf body
					} catch (error) {
						printError(error);
					}
				});
			} else {
				const message = `There was an error getting the profile for  ${username} (${http.STATUS_CODES[response.statusCode]})`;
				const statusCodeError  = new Error(message);
				printError(statusCodeError);
			}
		});
	request.on('error', error => console.error(`Problem with request: ${error.message}`));
	} catch (error) {
		printError(error);
	}

}


module.exports.get = get;