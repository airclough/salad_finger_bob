'use strict';

var stepsController = require( '../controllers/steps' );

module.exports = function( app ) {
  app.get( '/api/steps', stepsController.read );
  app.get( '*', function( req, res ) {
    res.render( 'index' );
  });
};
