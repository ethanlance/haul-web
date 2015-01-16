import Ember from "ember";
import DS from "ember-data"; 

//Models
var Product = DS.Model.extend(Ember.Validations.Mixin, {
	
	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	price: DS.attr( 'string' ),
	quantity: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ),


	user: DS.belongsTo('user'), 
	images: DS.hasMany('image', {async:true}),
	image: DS.belongsTo('image', {async:true}),	


	likeCount: DS.belongsTo('like-count', {async:true}),
	getCollections: DS.belongsTo('product-collection-list', {async:true}),
	getLikes: DS.belongsTo('product-liked-by-list', {async:true}),

	slug: function() {		
		if(Ember.isEmpty(this.get('name'))){
			return;
		}
		
		var slug = this.get('name');
		slug = slug.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		
		return slug;
	}.property('name'),

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		description: {
		 	presence: true,
		 	length: { maximum: 2000 }
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
export default Product;











