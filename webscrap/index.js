const osmosis = require('osmosis');
	osmosis
		// .get('www.google.com')
		// .set({'Title': 'title'})
		// .data(console.log)


    	// .get('https://www.google.co.in/search?q=analytics')
    	// .set({'related': ['.card-section .brs_col p a']})
	    // .data(function(data) {
	    //     console.log(data);
	    // })


	   // .get('https://www.google.co.in/search?q=analytics')
	   // .paginate('#navcnt table tr > td a[href]', 5)
	   // .find('#botstuff')
	   // .set({'related': ['.card-section .brs_col p a']})
	   // .data(console.log)
	   // .log(console.log) // enable logging
	   // .error(console.error)
	   
	   // .delay(ms)  interval between page scrape



    //   .get('http://apps.shopify.com/categories/sales')
	   // .find('.resourcescontent ul.app-card-grid')
	   // .follow('li a[href]')
	   // .find('.resourcescontent')
	   // .set({
	   //     'appname': '.app-header__details h1',
	   //     'email': '#AppInfo table tbody tr:nth-child(2) td > a'
	   //  })
	   // .log(console.log)   // enable logging to see what is does.
	   // .data(console.log)


		const fs = require('fs');
		let savedData = [];
		osmosis
		   .get(..).find(..).follow(..).find(..)
		   .set(..)
		   .log(console.log)
		   .data(function(data) {
		      console.log(data);
		      savedData.push(data);
		   })
		   .done(function() {
		      fs.writeFile('data.json', JSON.stringify( savedData, null, 4), function(err) {
		        if(err) console.error(err);
		        else console.log('Data Saved to data.json file');
		      })
		   });
