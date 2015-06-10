define(
  [ 'jquery',
    'views/jumbotron',
    'views/banner',
    'views/progress',
    'views/image',
    'views/content',
    'views/footer' ],
  function( $, jumbotronView, bannerView, progressView, imageView,
    contentView, footerView ) {
    'use strict';

    return {
      init: function( $el ) {
        this.$el = $el;

        this._render()
          ._createSubviews()
          ._subscribe();
      },

      _render: function() {
        this.$el.html( this._template() );
        return this;
      },

      _template: function() {
        return ''
          + '<div class="jumbotron"></div>'
          + '<div class="container">'
            + '<div class="banner"></div>'
            + '<div class="progress"></div>'
            + '<div class="image"></div>'
            + '<div class="content"></div>'
            + '<div class="footer"></div>'
          + '</div>';
      },

      _createSubviews: function() {
        var subviews = this.subviews = {};
        var prop;

        subviews.jumbotron = jumbotronView;
        subviews.banner = bannerView;
        subviews.progress = progressView;
        subviews.image = imageView;
        subviews.content = contentView;
        subview.footer = footerView;

        for( prop in subviews )
          subviews[ prop ].init( this.$el.find( '.' + prop ) );

        return this;
      },

      _subscribe: function() {
        events.on( 'hashChange', this._onHashChange, this );
        return this;
      },

      _onHashChange: function() {
        //
      }
    };
  }
);
