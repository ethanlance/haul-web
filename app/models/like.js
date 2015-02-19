import DS from "ember-data"; 

/**
 	Set whether a user likes/unlikes a product.
*/
export default DS.Model.extend({
	ref_type: DS.attr('string'),
	ref_id: DS.attr('string'),
	user_id: DS.attr('string'),
});