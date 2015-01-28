import Ember from "ember";
import DS from "ember-data"; 


//Models
var CollectionProductList = DS.Model.extend(Ember.Validations.Mixin, {
	
	editorial: DS.attr('string'),
	updated_at: DS.attr('string'),
	collection: DS.belongsTo('collection', {async:true}),
	product: DS.belongsTo('product', {async:true}),
	commentCount: DS.belongsTo('collection-product-comment-count', {async:true}),

	//Do we need the below?
	currency: DS.attr('string'),
	price: DS.attr('string'),
	name: DS.attr('string'),
	product_id: DS.attr('string'),
	collection_id: DS.attr('string'),
	user: DS.belongsTo('user', {async:true}),
	image: DS.belongsTo('image', {async:true}),
	

	validations: { 
		editorial: {
		 	presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		}
	}
});	
export default CollectionProductList;







