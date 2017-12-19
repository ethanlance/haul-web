import DS from 'ember-data';
/**
	List of users who like a post.
**/ 
export default DS.Model.extend({
	
	//Keep these as helpers.
	post_id: DS.attr('string'),	
	created_at: DS.attr('string'),
	user: DS.belongsTo('user', {async:true}),

}); 