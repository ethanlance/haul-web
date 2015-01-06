import DS from 'ember-data';

/**
	List of products a user likes.
**/ 
var UserLikesList = DS.Model.extend({
	user: DS.belongsTo('user'), 
	products: DS.hasMany('product', {async:true}) 
});
export default UserLikesList;