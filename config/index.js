'use strict';

var path = require( 'path' );
var express = require( 'express' );
var jade = require( 'jade' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

module.exports = function( app ) {
  app.set( 'title', 'Salad Finger Bob' );
  app.set( 'view engine', 'jade' );
  app.set( 'views', path.resolve( __dirname, '../app/views' ) );
  app.engine( 'jade', jade.__express );
  app.use( methodOverride() );
  app.use( bodyParser.json() );
  app.use( express.static( path.resolve( __dirname, '../public' ) ) );
};
