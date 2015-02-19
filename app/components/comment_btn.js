import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	totalBinding: 0,//"itemObject.commentCount.total",
	linkOff:false,
	actions: {
		scrollTo: function() { 
			if(this.get('linkOff')){
				return;
			}
			this.scrollTo('#leaveComment', 200);
		}
	}
});