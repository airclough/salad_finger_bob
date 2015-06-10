'use strict';

var read = function( req, res ) {
  var steps = [
    {
      name: 'salad',
      http: {
        url_hash: ''
      }
    },

    {
      name: 'about',
      http: {
        url_hash: 'about'
      },
      img: 'ghostbusters.png'
    },

    {
      name: 'more',
      http: {
        url_hash: 'more'
      },
      img: 'tz.png'
    },

    {
      name: 'nest',
      http: {
        url_hash: 'nest'
      },
      img: 'nest.png'
    },

    {
      name: 'agility',
      http: {
        url_hash: 'agility'
      },
      img: 'agility-bob.gif'
    },

    {
      name: 'inventis',
      http: {
        url_hash: 'inventis'
      },
      img: 'github.png'
    }
  ];

  res.json( steps );
};

module.exports = ( function() {
  return {
    read: read
  };
})();
