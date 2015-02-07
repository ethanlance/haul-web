import Ember from 'ember';
var $ = Ember.$;

export default Ember.Mixin.create({
  scrollingTimeout: 300,
  currentPosBinding: 'currentPos',
  bindScrolling: function() {
    var self = this,
    onScroll = function() {
      Ember.run.debounce(self, self.runScrolled, self.scrollingTimeout);
    };

    //Ember.$(document).on('touchmove.scrollable', onScroll);
    Ember.$(window).on('scroll.scrollable', onScroll);
  }.on('didInsertElement'),

  unbindScrolling: function() {
    Ember.$(window).off('scroll.scrollable');
    Ember.$(document).off('scroll.scrollable');
  }.on('willDestroyElement'),

  preservePos: function() { 
    var preservePos = this.getWithDefault('currentPos', 0);
    Ember.run.later(this, function(){
      Ember.$(window).scrollTop(preservePos);
    }, 300);
  }.on('didInsertElement'),

  runScrolled: function() {
    this.set('currentPos', Ember.$(window).scrollTop());
  }
});