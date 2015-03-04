import SignupController from './signup';
export default SignupController.extend({
	animateClose:false,
	actions: {
		close: function() {
			this.set('animateClose', true);
		}
	}
});