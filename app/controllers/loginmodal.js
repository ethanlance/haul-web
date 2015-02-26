import LoginController from './login';
export default LoginController.extend({
	animateClose:false,
	actions: {
		close: function() {
			console.log("CAUGHT, PASS ON")
			this.set('animateClose', true);
		}
	}
});