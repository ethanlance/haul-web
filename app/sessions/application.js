import Session from 'simple-auth/session';
import Ember from 'ember';

export default  Session.extend({
	currentUser: function() {
		var userId = this.get('user_id');
		if (!Ember.isEmpty(userId)) {
			return this.container.lookup('store:main').find('user', userId);
		}
	}.property('user_id')
}); 