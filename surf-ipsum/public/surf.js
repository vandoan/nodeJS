
 $.getJSON("/public/surf.json", function(data) {
 	const list = data;

	const surfIpsum = document.getElementById("surf-ipsum");
	surfIpsum.innerHTML = sentStruct1();
console.log(list.surfMoves.length);

function random(key){ //surfer
	let keys = key + "s";
	var word = list[keys][Math.floor(Math.random()*list[keys].length)][key];

	if(word == undefined || word == "") { // empty string and undefined check
		if(key == "surfer"){
			word = "surfer";
		} else if(key == "surfMove") {
			word = "move";
		} else if(key == "adjective") {
			word = "rad";
		} else {
			word = "surfs up"
		}
	}
	
	if(key == "surfMove"){
		word = word + "s";
	}

	return word;
}

function sentStruct1(){
	let surfer = random('surfer');
	let adj = random('adjective');
	let move = random('surfMove');
	// that {surfer} has {adj} {move}
	return `That ${surfer} has some ${adj} ${move}.`;
}


 });





// console.log(surf.surfers[2]);

//let surfer = list.surfers[Math.floor(Math.random()*list.surfers.length)].surfer;


// That {surfer} has a {adj} {board}

// the {surfer} {verb} that {wave}

// {{name}} {{verb}} {{waves}}

// that surfer with the {brand} {board} and wearing {brand} {gear} is a {surfer} 

// be wary of the {animals} west of {wave}

// that video with {name} in {{place}} is {adj}

// careful, {{adj}} {{wave type}} and {animals} around here

// {surfer} in {place} {surfverb} {waves}

// {surfer} with {adj} {gear} in {place}

// {place} is pretty {adj} during {time}

// Checkout {waves} in {place}. so {adj}. a lot of {surfer}

// 










// // Print Error Messages
// function printError(error) {
// 	console.error(error.message);
// }
// // https://openweathermap.org/current
// function getWeather(city) {
// 	try { // http://api.openweathermap.org/data/2.5/weather?units=imperial&q=tampa.json&APPID=ec9d435c91a19b4eaaa33303758d378c
// 		const request = http.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city},US.json&APPID=${weatherApi.key}`, response => {
// 		console.dir(response.statusCode);
// 			if (response.statusCode == 200){
// 				let body = "";
// 				// Read the data
// 				response.on('data', data => {
// 					body += data.toString();
// 				});

// 				response.on('end', () => {
// 					try {
// 						// Parse the data
// 						const weatherReport = JSON.parse(body);
// 						console.dir(weatherReport);
// 						// Print the data
// 							console.log(`${city}, high of ${weatherReport.main.temp_max} and low of ${weatherReport.main.temp_min}.`);

// 					} catch (error) {
// 						printError(error);
// 					}
// 				});
// 			} else {
// 				const message = `There was an error getting the weather for  ${city} (${http.STATUS_CODES[response.statusCode]})`;
// 				const statusCodeError  = new Error(message);
// 				printError(statusCodeError);
// 			}
// 		});


// 	request.on('error', error => console.error(`Problem with request: ${error.message}`));
// 	} catch (error) {
// 		printError(error);
// 	}


// }

// getWeather(city);
