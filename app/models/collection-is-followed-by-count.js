import DS from 'ember-data';

/*
	FollowCollectionCount:
	How many user's follow this collection
*/

var CollectionIsFollowedByCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});
export default CollectionIsFollowedByCount;