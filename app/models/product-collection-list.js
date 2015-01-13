import Ember from "ember";
import DS from "ember-data"; 

export default DS.Model.extend(Ember.Validations.Mixin, {
	collections: DS.hasMany('collection', {async:true}),
 	//product: DS.belongsTo('product', {async:true}),
 	//product_id: DS.attr('string'),
});