import Ember from "ember";
import DS from "ember-data";


//Models
var CollectionProduct = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),

	product: DS.belongsTo('product', {async:true}),
	collection: DS.belongsTo('collection'),

	validations: { 
		editorial: {
		 	//presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		},
		collection: {
		 	presence: true, 
		},
		product: {
		 	presence: true, 
		}
	}
});	
export default CollectionProduct;




