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
          + '<h2>salad bar open for business</h2>'
          + '<h3>only available for a limited time</h3>';
      }
    };
  }
);
