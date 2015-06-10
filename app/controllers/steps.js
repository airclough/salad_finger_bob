'use strict';

var read = function( req, res ) {
  var steps = [
    {
      http: {
        url_hash: 'yo'
      }
    }
  ];

  res.json( steps );
};

module.exports = ( function() {
  return {
    read: read
  };
})();
