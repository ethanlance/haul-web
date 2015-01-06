import DS from 'ember-data';
/**
	List of things a user follows
**/ 
var UserFollowsList = DS.Model.extend({
	user: DS.belongsTo('user'), 
	follows_user: DS.belongsTo('user', {async:true}),
	follows_collection: DS.belongsTo('collection', {async:true}),
});
export default UserFollowsList;