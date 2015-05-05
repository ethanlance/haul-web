import DS from "ember-data";
export default DS.Model.extend({
	buyer_user_id: DS.attr('string'),
	created_at: DS.attr('string'),
	post_id: DS.attr('string'),
	product_id: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),
	product_name: DS.attr('string'),
	product_price: DS.attr('string'),
	product_user_id: DS.attr('string'),
	shipping_status: DS.attr('string'),
	transaction_id: DS.attr('string'),
	updated_at: DS.attr('string'),
});