// grab the "required" packages or variables
//==============================================
var express = require('express');
var app = express();

var ig = require('instagram-node').instagram();


// configuring the app
//==============================================
// tell Node where to look for site resources
app.use(express.static(__dirname + '/public'));

// configure instagram app with client_id
ig.use({
	client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
	client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8'
});


// set the "view engine" to EJS
//==============================================
app.set('view engine', 'ejs');


// set the "Routes"
//==============================================

// home page route - popular images
app.get('/', function(req, res) {
	// use the instagram package to get popular media
	ig.media_popular(function(err, medias, remaining, limit) {
		// render the home page and pass in the popular images
		res.render('pages/index', { grams: medias });
	});
});
// START THE SERVER
// ==================================================
app.listen(4001);
console.log('App started! Look at http://localhost:4001');