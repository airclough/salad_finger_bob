define(
  [ 'jquery',
    'events',
    'router' ],
  function( $, events, Router ) {
    'use strict';

    var controller = {
      init: function( steps ) {
        this.steps = steps;
        this.router = new Router( {}, this.steps );
        this.appView = appView;

        this._subscribe()
        this.appView.init( $( '.app' ) );
      },

      _subscribe: function() {
        events.on( 'router:navigate', this._triggerNavigate, this );
        return this;
      },

      _triggerNavigate: function( view ) {
        console.log( view );
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
