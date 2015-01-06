import Ember from "ember";
import DS from "ember-data"; 


//Models
var CollectionProductList = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),
	currency: DS.attr('string'),
	price: DS.attr('string'),
	name: DS.attr('string'),
	product_id: DS.attr('string'),
	collection_id: DS.attr('string'),

	user: DS.belongsTo('user'),
	collection: DS.belongsTo('collection'),
	product: DS.belongsTo('product'),
	image: DS.belongsTo('image'),

	validations: { 
		editorial: {
		 	presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		}
	}
});	
export default CollectionProductList;







