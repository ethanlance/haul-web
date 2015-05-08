import DS from 'ember-data';
export default DS.Model.extend({
	name: DS.attr( 'string' ), 
	facebook_user_id: DS.attr( 'string' ),
	follows_total: DS.attr( 'string' ),
	username: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ),
	user: DS.belongsTo('user', {async:true}),
});