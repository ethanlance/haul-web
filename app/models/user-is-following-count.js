import DS from 'ember-data';
/*
	UserIsFollowingCount:
	How many ITEMS (users & collections combined) is this user following
*/

var UserIsFollowingCount = DS.Model.extend({
	total: DS.attr('string'),
	user: DS.belongsTo('user', {async:true})
});
export default UserIsFollowingCount;