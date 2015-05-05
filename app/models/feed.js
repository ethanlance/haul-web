import Ember from "ember";
import DS from "ember-data";
export default DS.Model.extend({
		
	//Helpers, keep.
	post_id: DS.attr('string'),
	user_id: DS.attr('string'),
		
	//POST
	user: DS.belongsTo('user', {async:true}),

	subject: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),
	updated_at: DS.attr('string'),
	created_at: DS.attr('string'),
	
	//REPOST aka parent post
    repost_body: DS.attr('string'),
    repost: DS.belongsTo('post', {async:true}),
    repost_user: DS.belongsTo('user', {async:true}),
    repost_id: DS.attr('string'),

	//PRODUCT
	product_user: DS.belongsTo('user', {async:true}),	
	product_images: DS.hasMany('image', {async:true}),
	product_currency: DS.attr('string'),
	product_price: DS.attr('string'),
	product_quantity: DS.attr('string'),
	product_name: DS.attr('string'),
	product_description: DS.attr('string'),
	product_link: DS.attr('string'),
	product_status: DS.attr('string'),

	product_id: DS.attr('string'),

	commentCount: DS.belongsTo('comment-count', {async:true}),
	likesCount: DS.belongsTo('post-likes-count', {async:true}),

	post_slug: function() {		
		if(!Ember.isEmpty(this.get('subject'))){
			return this.get('subject').toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		}
	}.property('subject')
});	
