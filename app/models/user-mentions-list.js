import DS from 'ember-data';
export default DS.Model.extend({
	//Keep these as helpers.
	comment_id: DS.attr('string'),	
	subject_id: DS.attr('string'),
	subject_type: DS.attr('string'),

	read: DS.attr('boolean'),	
	created_at: DS.attr('string'),
	
	comment: DS.attr('string'),
	user: DS.belongsTo('user', {async:true}),

	subject: function() {
		var type = this.get('subject_type');
		var id = this.get('subject_id');
		if( type === "posts" ) {
			return this.store.find('post', id);
		}
	}.property()
});