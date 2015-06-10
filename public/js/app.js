define(
  [ 'events',
    'router' ],
  function( events, Router ) {
    'use strict';

    return {
      init: function() {
        console.log( events, Router );
      }
    };
  }
);
