import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	
	totalBinding: "post.commentCount.total",

	commentText: 'comments',

	post: false,

	usernameBinding: 'post.user.username',

	showCount: false,

	totalChanged: function() {

		if(this.get('total') === 1 ){
			this.set('commentText', 'comment');
		}else{
			this.set('commentText', 'comments');
		}

		if( this.get('total') > this.get('limit') ){
			this.set('showCount', true);
		}else{
			this.set('showCount', false);
		}
	}.on('didInsertElement').observes('total'),

	gotolink:false,
	
	actions: {
		btnClick: function() { 
			if(this.get('goToRoute')){

				var post = this.get('post');

				var username = this.get('username');

				this.sendAction('goToRoute', 'profile.post', username, post.get('post_id'), post.get('post_slug'), {queryParams: {anchor:"leaveComment"}});		
			
				return false;
			}

			this.scrollTo('#leaveComment', 200);
		}
	}
});