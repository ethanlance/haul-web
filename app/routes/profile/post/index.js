import Ember from 'ember';
import ResetScrollMixin from '../../../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin, {
	model: function() { 
    	this.activate(); //Make sure we scroll top
		return this.modelFor('profile.post');
	},
});