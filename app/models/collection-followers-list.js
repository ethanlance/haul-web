import DS from 'ember-data';

/**
	List of users who follow this collection.
**/ 
var CollectionFollowersList = DS.Model.extend({
	collection: DS.belongsTo('collection'), 
	followers: DS.hasMany('user', {async:true}),
});
export default CollectionFollowersList;