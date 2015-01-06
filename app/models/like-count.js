import DS from 'ember-data';

/**
 Total likes a product has.
 **/
var LikeCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});
export default LikeCount;