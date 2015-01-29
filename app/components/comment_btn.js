import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	totalBinding: "itemObject.commentCount.total",
	anchor: true,
	actions: {
		scrollTo: function() { 
			this.scrollTo('#leaveComment', 200);
		}
	}
});