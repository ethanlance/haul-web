import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	totalBinding: "post.commentCount.total",
	linkOff:false,
	actions: {
		btnClick: function() { 
			if(this.get('linkOff')){
				return;
			}
			this.scrollTo('#leaveComment', 200);
		}
	}
});