/*global Products, Ember */
 
	Haul.ApiKey = DS.Model.extend({
		accessToken: DS.attr('string'),
		user: DS.belongsTo('user', {
			async: true
		})
	});
 
	Haul.Authlogin = DS.Model.extend(Ember.Validations.Mixin, {

		email: DS.attr('string'),
		password: DS.attr('string'),

		validations: {
			email: {
				presence: true
			},
			password: {
			 	presence: true
			}
		}
	});

	Haul.Authsignup = DS.Model.extend(Ember.Validations.Mixin, {

		email: DS.attr('string'),

		validations: {
			email: {
				presence: true,
				format: {with: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank:false, message: 'please enter a valid email address.'}
			} 
		}
	});

	Haul.Authconfirmation = DS.Model.extend(Ember.Validations.Mixin, {

		password: DS.attr('string'),
		firstname: DS.attr('string'),
		lastname: DS.attr('string'),

		validations: { 
			password: {
			 	presence: true,
			 	format: {with: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$@$!%*?&]{6,}$/, allowBlank:false, message: 'password must contain at least 6 characters, 1 number, 1 upper and 1 lowercase.'}
			},
			firstname: {
			 	presence: true
			},
			lastname: {
			 	presence: true
			}
		}
	});

