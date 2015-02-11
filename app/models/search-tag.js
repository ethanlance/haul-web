import DS from 'ember-data';

export default DS.Model.extend({


	name: DS.attr( 'string' ),
	image: DS.belongsTo('image', {async:true}),	
	price: DS.attr( 'string' ),


})