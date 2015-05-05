import Ember from "ember";
import DS from "ember-data"; 
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	//Keep these as helpers.
	post_id: DS.attr('string'),	
	user_id: DS.attr('string'),	

	
	user: DS.belongsTo('user', {async:true}),
	
	//POST
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
	product_currency: DS.attr('string'),
	product_price: DS.attr('string'),
	product_quantity: DS.attr('string'),
	product_name: DS.attr('string'),
	product_description: DS.attr('string'),
	product_link: DS.attr('string'),
	product_status: DS.attr('string'),

	commentCount: DS.belongsTo('comment-count', {async:true}),
	likesCount: DS.belongsTo('post-likes-count', {async:true}),

	post_slug: function() {		
		if(!Ember.isEmpty(this.get('subject'))){
			return this.get('subject').toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		}
	}.property('subject'),


	product_status_text: function() {
		return this.get('product_status').replace("_"," ");
	}.property('product_status'),	

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		description: {
		 	presence: true,
		 	length: { maximum: 500 }
		},
		quantity: {
			numericality: true,
		 	presence: true,
		 	length: { maximum: 100 }
		},
		price: {
			numericality: true,
		 	presence: true
		}
	}
});