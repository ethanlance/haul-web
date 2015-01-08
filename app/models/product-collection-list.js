import DS from "ember-data"; 
//Get all the stores (collections) that this product is in.

//Models
var ProductCollectionList = DS.Model.extend(Ember.Validations.Mixin, {
	collections: DS.hasMany('collection', {async:true}),
 	//product: DS.belongsTo('product', {async:true}),
 	//product_id: DS.attr('string'),
});	
export default ProductCollectionList;





