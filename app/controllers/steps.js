'use strict';

var read = function( req, res ) {
  var steps = [];

  res.json( steps );
};

module.exports = ( function() {
  return {
    read: read
  };
})();
