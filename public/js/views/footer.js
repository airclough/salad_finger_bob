define(
  [],
  function() {
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

      _onHashChange: function() {
        this._render();
      }

      _render: function() {
        this.$el.html( this._template() );
        return this;
      },

      _template: function() {
        return '';
      }
    };
  }
);
