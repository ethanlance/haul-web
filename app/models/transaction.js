import DS from "ember-data";
export default DS.Model.extend({
	
	transaction_id: DS.attr('string'),

	buyer: DS.belongsTo('user', {async:true}),
	seller: DS.belongsTo('user', {async:true}),

	buyer_user_id: DS.attr('string'),
	seller_user_id: DS.attr('string'),
	
	escrow_status: DS.attr('string'),
	fee: DS.attr('string'),
	
	post: DS.belongsTo('post', {async:true}),
	
	product_id: DS.attr('string'),
	product_price: DS.attr('string'),

	
	
	shipping_id: DS.attr('string'),
	shipping_address: DS.attr('string'),
	shipping_carrier: DS.attr('string'),
	shipping_city: DS.attr('string'),
	shipping_postal_code: DS.attr('string'),
	shipping_price: DS.attr('string'),
	shipping_state: DS.attr('string'),
	shipping_status: DS.attr('string'),
	
	status: DS.attr('string'),
	
	type: DS.attr('string'),
	updated_at: DS.attr('string'),
	created_at: DS.attr('string'),
});