'use strict';

var read = function( req, res ) {
  var steps = [
    {
      http: {
        url_hash: ''
      }
    },

    {
      http: {
        url_hash: 'about',
        img: 'ghostbusters.png'
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
