'use strict';

var express = require( 'express' );
var config = require( './config' );
var routes = require( './app/routes' );

var port = process.env.PORT || 1337;
var app;

app = express();
config( app );
routes( app );

app.listen( port, function () {
  console.log( app.get( 'title' ) + ' running on port ' + port );
});
