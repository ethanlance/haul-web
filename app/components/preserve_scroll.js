import Ember from 'ember';

export default Ember.Component.extend({
	scrollingTimeout: 100,
	bindScrolling: function() {
		var self = this,
		onScroll = function() {
			Ember.run.debounce(self, self.runScrolled, self.scrollingTimeout);
		};

		Ember.$(document).on('touchmove.scrollable', onScroll);
		Ember.$(window).on('scroll.scrollable', onScroll);
	}.on('didInsertElement'),

	unbindScrolling: function() {
		Ember.$(window).off('.scrollable');
		Ember.$(document).off('.scrollable');
	}.on('willDestroyElement'),

	preservePos: function() {
		Ember.$(window).scrollTop(this.getWithDefault('currentScrollPos', 0));
	}.on('didInsertElement'),

	runScrolled: function() {
		var position = Ember.$(document).height() - Ember.$(window).scrollTop();
		var viewportHeight = document.documentElement.clientHeight;
		this.set('currentScrollPos', Ember.$(window).scrollTop());
	}
});