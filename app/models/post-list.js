import Ember from "ember";
import DS from "ember-data"; 
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	//Keep these as helpers.
	post_id: DS.attr('string'),	
	user_id: DS.attr('string'),	


	post: DS.belongsTo('post', {async:true}),


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
	product_user_id: DS.attr('string'),
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

	//Is the owner of the post selling this?  Or blogging?
	postOwnerIsSeller: function() {

		if( this.get('user_id') === this.get('product_user_id') && this.get('product_status') !== 'FOR_SALE_OFFSITE' ){
			return true;
		}else{
			return false;
		}

	}.property('product_status', 'user_id', 'product_user_id'),


	product_status_text: function() {
		var product_status = this.get('product_status');
		if( product_status === 'FOR_SALE' || product_status === "FOR_SALE_OFFSITE" ) {
			return "FOR SALE";
		}else if( product_status === "SOLD") {
			return "SOLD!";
		}else{
			return "Not For Sale";
		}
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