import LoginController from './login';
export default LoginController.extend({
	
	animateClose:false,
	
	model: null,

	actions: {
		cancel: function() {
			this.set('animateClose', true);
		}
	}
});