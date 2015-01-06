import DS from 'ember-data';
/**
 COMMENT COUNT MODEL
**/

var ProductCommentCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});
export default ProductCommentCount;