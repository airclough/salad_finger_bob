define(
  [ 'jquery',
    'events',
    'router',
    'views/app' ],
  function( $, events, Router, appView ) {
    'use strict';

    var controller = {
      init: function( steps ) {
        this.router = new Router( {}, steps );
        this.appView = appView;

        this.appView.init( $( '.app' ) );

        this._eachStep( steps )
          ._subscribe();
      },

      _eachStep: function( steps ) {
        this.steps = [];
        var i = 0;
        var l = steps.length;
        var step;

        for ( ; i < l; i++ ) {
          step = steps[ i ];
          step.index = i;
          this.steps.push( step );
        }

        return this;
      },

      _subscribe: function() {
        events.on( 'router:state', this._routerState, this );
        // events.trigger( 'router:navigate', 0 );
        return this;
      },

      _routerState: function( step ) {
        console.log( step, this.steps );
        events.trigger( 'hashChange', this.steps[ step ] );
      }
    };

    return {
      init: function() {
        this._getSteps();
      },

      _getSteps: function() {
        var that = this;
        var req = $.ajax({
          url     : '/api/steps',
          type    : 'GET',
          dataType: 'json'
        });

        req.done( function( data, textStatus, jqXHR ) {
          controller.init( data );
        });

        req.fail( function( jqXHR, textStatus, errorThrown ) {
          console.log( 'Salad Finger Fail' );
        });
      }
    };
  }
);
