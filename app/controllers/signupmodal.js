import SignupController from './signup';
export default SignupController.extend({
	animateClose:false,
	actions: {
		cancel: function() {
			this.set('animateClose', true);
		}
	}
});