import DS from "ember-data";
export default DS.Model.extend({
	user_id: DS.attr('string'),
	address_id: DS.attr('string'),
	payment_id: DS.attr('string'),
	post_id: DS.attr('string'),
	product_user_id: DS.attr('string'),
	product_id: DS.attr('string'),
});