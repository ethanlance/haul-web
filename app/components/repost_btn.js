import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	post:null,
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
				function foundPost(post){
					_this.sendAction('openModal', 'repost', post);				
				},
				function failedFind(error){
					_this.sendAction('openModal', 'errorhandler', error);
				}
			);

		}
	}
});