define(
  [ 'events' ],
  function( events ) {
    'use strict';

    return {
      init: function( $el ) {
        this.$el = $el;

        this._subscribe();
      },

      _subscribe: function() {
        events.on( 'hashChange', this._onHashChange, this );
        return this;
      },

      _onHashChange: function( step ) {
        this._render( step );
      },

      _render: function( step ) {
        this.$el.html( this[ '_' + step.name + 'Template' ]( step.img ) );
        return this;
      },

      _aboutTemplate: function( img ) {
        return '<img src="img/' + img + '">';
      }
    };
  }
);
