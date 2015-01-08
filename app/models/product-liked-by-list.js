import DS from 'ember-data';
/**
	List of users who like a product.
**/ 
var ProductLikedByList = DS.Model.extend({
	//product: DS.belongsTo('product', {async:true}), 
	//product_id: DS.attr('string'),
	users: DS.hasMany('user', {async:true}) 
});
export default ProductLikedByList;