import DS from 'ember-data';
export default DS.Model.extend({
	
	post: DS.belongsTo('post', {async:true}),	
	user: DS.belongsTo('user', {async:true}),	

	subject: DS.attr( 'string' ),
	image: DS.belongsTo('image', {async:true}),	
	
	product_currency: DS.attr('string'),
	product_price: DS.attr('string'),
	product_status: DS.attr('string'),
	product_name: DS.attr('string'),

	update_at: DS.attr('string'),
	comments_total: DS.attr('string'),
	likes_total: DS.attr('string'),

});