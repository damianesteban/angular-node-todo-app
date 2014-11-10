// server.js

// set up ============================================================
var express        = require('express');
var app            = express();                    // create our app w/ express
var mongoose       = require('mongoose');          // mongoose for mongodb
var port           = process.env.PORT || 8080;     // set the port
var database       = require('./config/database'); // load the database config
var morgan         = require('morgan');            // log requests to console (express 4)
var bodyParser     = require('body-parser');       // pull information from HTML POST (express 4)
var methodOverride = require('method-override');   // simulate DELETE and PUT (express 4)

// configuration =====================================================
mongoose.connect(database.url);  // connect to mongoDB database

app.configure(function() {
    app.use(express.static(__dir.name + '/public')); // set the static files location /public/img will be /img for users.
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);


