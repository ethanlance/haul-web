import LoginController from './login';
export default LoginController.extend({
	animateClose:false,
	actions: {
		close: function() {
			this.set('animateClose', true);
		}
	}
});