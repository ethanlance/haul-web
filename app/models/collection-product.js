import Ember from "ember";
import DS from "ember-data";
export default DS.Model.extend(Ember.Validations.Mixin, {
	
	editorial: DS.attr('string'),
	product: DS.belongsTo('product', {async:true}),
	collection: DS.belongsTo('collection', {async:true}),

	commentCount: DS.belongsTo('collection-product-comment-count', {async:true}),

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
