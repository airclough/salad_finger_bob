define(
  [],
  function() {
    'use strict';

    return {
      init: function( $el ) {
        this.$el = $el;

        this._render();
      },

      _render: function() {
        this.$el.html( this._template() );
        return this;
      },

      _template: function() {
        return ''
          + '<h1>call me <span>Salad Finger Bob</span></h1>'
          + '<div class="btn-next">next</div>';
      }
    };
  }
);
