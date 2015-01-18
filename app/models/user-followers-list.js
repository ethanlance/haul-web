import DS from 'ember-data';
/**
	List of users who follow a user.
**/ 
var UserFollowersList = DS.Model.extend({
	followers: DS.hasMany('user', {async:true}),
});
export default UserFollowersList;