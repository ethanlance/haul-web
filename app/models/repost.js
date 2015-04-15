import Ember from "ember";
import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	user: DS.belongsTo('user', {async:true}),

	subject: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),
	updated_at: DS.attr('string'),
	
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

	post_slug: function() {		
		if(!Ember.isEmpty(this.get('subject'))){
			return this.get('subject').toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		}
	}.property('subject'),

	validations: { 
		body: {
		 	//presence: true,
		 	length: { maximum: 12000  },
		 	image: {message:'Sorry, only images from the product can go in your post'},
		},
		subject: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		product_name: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		product_description: {
		 	presence: true,
		 	length: { maximum: 2000 }
		},
		product_quantity: {
			numericality: true,
		 	presence: true,
		 	length: { maximum: 100 }
		},
		product_price: {
			numericality: true,
		 	presence: true
		}
	}
});	
