import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	
	totalBinding: "post.commentCount.total",

	commentText: 'comments',

	totalChanged: function() {
		if(this.get('total') === 1 ){
			this.set('commentText', 'comment');
		}else{
			this.set('commentText', 'comments');
		}
	}.observes('total'),

	gotolink:false,
	
	actions: {
		btnClick: function() { 
			if(this.get('gotolink')){
				return;
			}
			this.scrollTo('#leaveComment', 200);
		}
	}
});