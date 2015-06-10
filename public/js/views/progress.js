define(
  [ 'events' ],
  function( events ) {
    'use strict';

    return {
      init: function( $el, l ) {
        this.$el = $el;
        this.l = l;

        this._render()
          ._subscribe();
      },

      _render: function() {
        this.$el.html( this._template() );
        return this;
      },

      _template: function() {
        return '<div class="bar"></div>';
      },

      _subscribe: function() {
        events.on( 'hashChange', this._onHashChange, this );
        return this;
      },

      _onHashChange: function( step ) {
        ( this.$bar = this.$bar || this.$el.find( '.bar' ) )
          .css( 'width', ( step.index + 1 )  / this.l * 100 + '%' );
      }
    };
  }
);
