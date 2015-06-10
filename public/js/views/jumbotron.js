define(
  [ 'events' ],
  function( events ) {
    'use strict';

    return {
      init: function( $el ) {
        this.$el = $el;

        this._render()
          ._attachEventListeners();
      },

      _render: function() {
        this.$el.html( this._template() );
        return this;
      },

      _template: function() {
        return ''
          + '<h2>call me</h2>'
          + '<h1>Salad Finger Bob</span></h1>'
          + '<div class="next">next</div>';
      },

      _attachEventListeners: function() {
        this.$el.find( '.next' ).on( 'click', function( e ) {
          e.preventDefault();

          events.trigger( 'router:navigate', 1 );
          return false;
        });
      }
    };
  }
);
