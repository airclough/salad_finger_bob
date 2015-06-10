'use strict';

require.config({
  baseUrl: '/js',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
  }
});

require( [ 'jquery' ] );

define(
  [ 'app' ],
  function( app ) {
    app.init();
  }
);
