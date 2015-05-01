import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {

	payment_id: DS.attr('string'),
	user_id: DS.attr('string'),
	number: DS.attr('string'),
	card_image_url: DS.attr('string'),
	card_type: DS.attr('string'),
	label: DS.attr('string'),

});
