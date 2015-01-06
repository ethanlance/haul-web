import Ember from "ember";
import DS from "ember-data"; 


//Models
var ProductList = DS.Model.extend(Ember.Validations.Mixin, {
	
	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	price: DS.attr( 'string' ),
	quantity: DS.attr( 'string' ),
	image_ids: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ),

	image: DS.belongsTo('image',{async:true}), 
	user: DS.belongsTo('user'),
	
	//comments: DS.hasMany('comment',{async:true}),

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
export default ProductList;











