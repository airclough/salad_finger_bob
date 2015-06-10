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
              + '<div>Model Rocket Club</div>'
            + '</li>'
            + '<li>'
              + '<label>interests:</label>'
              + '<div>Yanks, Giants (NY), Mario Kart 64, girls.</div>'
            + '</li>'
            + '<li>'
              + '<label>fun fact:</label>'
              + '<div>You can find me on Netflix (The Black Donnellys).</div>'
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
          + '<div class="next" data-index="4">next</div>';
      },

      _agilityTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>agile programming</h2>'
          + '</div>'
          + '<ul class="agility">'
            + '<li>Countless projects <span>(Inventis, HealthPass/HealthRight)</span></li>'
            + '<li>Bountiful technologies <span>(Grunt, Bower, RequireJS, NodeJS)</span></li>'
            + '<li>Several languages <span>(Javascript, Ruby, PHP)</span></li>'
            + '<li>Consuming APIs</li>'
            + '<li>Querying Doms</li>'
          + '</ul>'
          + '<div class="next" data-index="5">next</div>';
      },

      _inventisTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>Angelrush Beginnings</h2>'
          + '</div>'
          + '<h3>Inventis</h3>'
          + '<ul class="agility">'
            + '<li>Diet campaigns</li>'
            + '<li>Skin campaigns</li>'
            + '<li>Explosive Lean Muscle</li>'
          + '</ul>'
          + '<div class="next" data-index="6">next</div>';
      },

      _fmTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>Currently at Angelrush</h2>'
          + '</div>'
          + '<h3>FM Library / HealthPass Survey</h3>'
          + '<ul class="agility">'
            + '<li>Architecting FM Library</li>'
            + '<li>Interfacing w/ internal and external APIs</li>'
            + '<li>MVC*</li>'
            + '<li>Survey versioning</li>'
            + '<li>Build system</li>'
          + '</ul>'
          + '<div class="next" data-index="7">next</div>';
      },

      _futureTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>Future at Angelrush</h2>'
          + '</div>'
          + '<h3>FM Library / HealthPass Survey</h3>'
          + '<ul class="agility">'
            + '<li>Scalable more robust MVC*</li>'
            + '<li>Smarter more dynamic survey</li>'
            + '<li>UI controlled path creation</li>'
            + '<li>Rumormill</li>'
            + '<li>Good times on the reg</li>'
            + '<li>Yachts on the reg</li>'
          + '</ul>'
          + '<div class="next" data-index="8">next</div>';
      },

      _martisTemplate: function() {
        return ''
          + '<div class="content-header">'
            + '<img src="img/salad-head.png">'
            + '<h2>see ya in martis</h2>'
          + '</div>';
      },
    };
  }
);
