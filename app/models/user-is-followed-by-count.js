import DS from 'ember-data';
/*
	UserFollowedByUserCount:
	How many user's follow this user
*/

var UserIsFollowedByCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product', {async:true})
});
export default UserIsFollowedByCount;