import Ember from 'ember';
var $ = Ember.$;

export default Ember.Component.extend({
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
    
      window.twttr.widgets.load();
      $('iframe.twitter-share-button').css('width', '78px');
    
      this.set('data-url', window.location.href);  
  }

});