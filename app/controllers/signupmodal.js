import SignupController from './signup';
export default SignupController.extend({
	animateClose:false,
	actions: {
		close: function() {
			console.log("CAUGHT, PASS ON")
			this.set('animateClose', true);
		}
	}
});