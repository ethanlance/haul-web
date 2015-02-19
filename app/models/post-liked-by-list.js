import DS from 'ember-data';
/**
	List of users who like a post.
**/ 
export default DS.Model.extend({
	users: DS.hasMany('user', {async:true}) 
}); 