import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	currentUserIdBinding: "session.currentUser.id",
	postIdBinding: "post.id",
	actions: {
		btnClick: function() {

			//Intercept if user is anonymous:
			if( !this.get('currentUserId')){
				this.sendAction('openModal', 'loginmodal', {});
				return;
			}

			var _this = this;
			var store = this.container.lookup('store:main'); 

			store.find('post', this.get('postId') )
			.then(
				function foundPost(record){
					_this.sendAction('openModal', 'repost', record);				
				},
				function failedFind(error){
					_this.sendAction('openModal', 'errorhandler', error);
				}
			);

		}
	}
});