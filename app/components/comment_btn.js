import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	
	totalBinding: "post.commentCount.total",

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