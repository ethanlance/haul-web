import Ember from "ember";
import DS from "ember-data";

var ProductComment = DS.Model.extend(Ember.Validations.Mixin, {
	
	comment: DS.attr('string'),

	product_id: DS.attr('string'),
	product: DS.belongsTo('product'),

	user_id: DS.attr('string'),
	user: DS.belongsTo('user'),
	
	context_id: DS.attr('string'),
	context_type: DS.attr('string'),

	created_at: DS.attr('string'),
	marker_id: DS.attr('string'),
	
	validations: { 
		comment: {
		 	presence: true,
		 	length: { minimum: 2, maximum: 2000 }
		}
	}
});
export default ProductComment;