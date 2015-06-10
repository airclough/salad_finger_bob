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
        this._render( step )
          ._attachEventListeners();
      },

      _render: function( step ) {
        this.$el.html( this[ '_' + step.name + 'Template' ]() );
        return this;
      },

      _attachEventListeners: function() {
        this.$el.find( '.next' ).on( 'click', function() {
          events.trigger( 'router:navigate', $( this ).data( 'index' ) );
        });
      },

      _aboutTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>start by telling us a little about yourself:</h2>'
          + '</div>'
          + '<ul>'
            + '<li>'
              + '<label>name:</label>'
              + '<div>Robert Martin Fairclough Jr.</div>'
            + '</li>'
            + '<li>'
              + '<label>hometown:</label>'
              + '<div>Orangetown, NY</div>'
            + '</li>'
            + '<li>'
              + '<label>siblings:</label>'
              + '<div>1 brother</div>'
            + '</li>'
            + '<li>'
              + '<label>favorite ghostbuster:</label>'
              + '<div>Louis Tully (Rick Moranis)</div>'
            + '</li>'
          + '</ul>'
          + '<div class="next" data-index="2">next</div>';
      },

      _moreTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>a little more:</h2>'
          + '</div>'
          + '<ul>'
            + '<li>'
              + '<label>high school:</label>'
              + '<div>Tappan Zee High School</div>'
            + '</li>'
            + '<li>'
              + '<label>after school activities:</label>'
              + '<div>Model rocket club</div>'
            + '</li>'
          + '</ul>'
          + '<div class="next" data-index="3">next</div>';
      },

      _nestTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>the crows nest</h2>'
          + '</div>'
          + '<div class="next" data-index="3">next</div>';
      }
    };
  }
);
