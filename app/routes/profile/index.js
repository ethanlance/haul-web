import ApplicationRoute from './../application';

export default ApplicationRoute.extend({
	model: function() { 
		return this.store.find('post-list', {user_id: this.modelFor('profile').get('id')} );
	}, 
	setupController: function(controller, model) {
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	},
	serialize: function(model) {  
 	   	return { post_slug: model.post_slug, post_id: model.id };
	} 
});