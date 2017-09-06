var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();


app.get('/scrape', function(req, res){

	// Anchorman 2
    let url = 'http://www.imdb.com/title/tt1229340/';
    // call back: error, response status, html
    request(url, function(error, response, html){

    	if(!error){
    		var $ = cheerio.load(html);
    		var title, release, rating; // scrape items
    		var json = { title : "",  release : "", rating : ""};

    		title = $('.title_wrapper h1').text();
    		release = $('.title_wrapper #titleYear a').text();
    		rating = $('.ratingValue strong span').text();
    		json.title = title; // store it in json object
    		json.release = release;
			json.rating = rating;

    		console.dir(json);
    	} else {
    		console.log(error);
    	}
    	
	    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
	    	console.log('File written.')
	    });
    });


	res.send('Check your console!');


});

app.listen('8080');
console.log('Magic happens on port 8080');
exports = module.exports = app;