import DS from 'ember-data';
export default DS.Model.extend({
	
	post_id: DS.attr('string'),

	subject: DS.attr( 'string' ),
	image: DS.belongsTo('image', {async:true}),	
	
	product_currency: DS.attr('string'),
	product_price: DS.attr('string'),
	product_status: DS.attr('string'),
	product_name: DS.attr('string'),

	update_at: DS.attr('string'),
	comments_total: DS.attr('string'),
	likes_total: DS.attr('string'),

	product_status_text: function() { 
		return this.get('product_status').replace("_"," ");
	}.property('product_status'),	

	post_slug: function() {		
		if(!Ember.isEmpty(this.get('subject'))){
			return this.get('subject').toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		}
	}.property('subject'),
});