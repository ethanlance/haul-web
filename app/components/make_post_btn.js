import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	post:null,
	currentUserIdBinding: "session.currentUser.id",
	actions: {
		btnClick: function() {

			//Intercept if user is anonymous:
			if( !this.get('currentUserId')){
				this.sendAction('openModal', 'login', {});
				return;
			}

			var store = this.container.lookup('store:main'); 
			this.sendAction('openModal', 'post-or-import', store.createRecord('post'));			
		}
	}
});