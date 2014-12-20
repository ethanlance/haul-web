Haul.TwitterBtnComponent = Ember.Component.extend({
  tagName: 'a',
  classNames: 'twitter-share-button',
  attributeBindings: [
    'data-size', 
    'data-url', 
    'data-text', 
    'data-hashtags',
    'data-count'
  ],

  didInsertElement: function() {
    if( window.twtrr ) {
      window.twttr.widgets.load();
      $('iframe.twitter-share-button').css('width', '78px')
    }
  }

});