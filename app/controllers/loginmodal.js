import LoginController from './login';
export default LoginController.extend({
	animateClose:false,
	actions: {
		cancel: function() {
			this.set('animateClose', true);
		}
	}
});