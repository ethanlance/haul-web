import DS from 'ember-data';

/** Users' Collections **/
var UserCollection = DS.Model.extend({
	user: DS.belongsTo('user', {async:true}),
	collection: DS.belongsTo('collection', {async:true}),

	user_id: DS.attr('string'),
	collection_name: DS.attr('string'),
	collection_id: DS.attr('string'),
	slug: DS.attr('string'),
});
export default UserCollection;