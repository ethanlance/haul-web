import Ember from 'ember';
export default Ember.Route.extend( {

	post: null,

	image: null,

	metaTitle: function() {
		
		var post = this.get('post');

		var title = " " + post.get('subject');
		
		return title;

	}.property('post'),

  	metaDescription: function() {
		
		var post = this.get('post');

		var title = " " + post.get('subject');
		
		return title;

	}.property('post'),

	metaOgImage: function() {
		var _this = this;
		
		var image_id = this.get('post').get('image').get('id');

		var src = this.ENV.Server.IMAGE_SERVER_HOST +"/images/" + image_id + "/medium";	

		return src;

	}.property('post'),


	model: function(params) {
		var _this = this;
		var post_id = params.id;

		return this.store.find('post', post_id).then(function(result){
			
			_this.set('post', result);
 
 			return result;

		}, function() {
			return _this.transitionTo('not-found');
		});
 	}
});