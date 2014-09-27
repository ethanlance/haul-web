/*global Products, Ember */
(function () {
    'use strict';

	Haul.User = DS.Model.extend({
		name: DS.attr('string'),
		email: DS.attr('string'),
		apiKeys: DS.hasMany('apiKey'),
		errors: {}
	});

	Haul.ApiKey = DS.Model.extend({
		accessToken: DS.attr('string'),
		user: DS.belongsTo('user', {
			async: true
		})
	});

	Haul.UserSerializer =  DS.RESTSerializer.extend({
		normalizePayload: function(store, payload) {

			var data = {"user":[{
					name: payload.data.firstname,
					email: payload.data.email,
					id: payload.data.user_id
				}]
			}; 

		    return this._super(store, data);
		}
	});

})();