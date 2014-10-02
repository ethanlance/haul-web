/*global Products, Ember */


	Haul.User = DS.Model.extend({
		name: DS.attr('string'),
		slug: DS.attr('string'),
		email: DS.attr('string'),
		picture: DS.attr('string'),
		products: DS.hasMany('product',{async:true}),
		//apiKeys: DS.hasMany('apiKey')
	});

	//FIXTURE TEST DATA:
	Haul.User.FIXTURES = [
	  {
	    id: 1,
	    name: 'Jon Snow',
	    slug: 'jonsnow',
	    picture: 'http://www.top-ten.tv/wp-content/uploads/2013/01/image4.jpeg',
	    products: [1,2,3,4]
	  }, {
	    id: 2,
	    name: 'Jaime Lannister',
	    slug: 'thekingslayer',
	    picture: 'http://www.cosplayisland.co.uk/files/costumes/358/53464/jaime-lannister-1024.jpg',
	    products: [5,6]
	  }, {
	    id: 3,
	    name: 'Tyrion Lannister',
	    slug: 'tyrionl',
	    picture: 'http://4.bp.blogspot.com/-XuFyPnIQKnA/UBKlhJi1-KI/AAAAAAAAAQo/SrtvhFElX0A/s1600/Game-of-Thrones-Tyrion-Lannister.png',
	    products: []
	  }, {
	    id: 4,
	    name: 'Cersei Lannister',
	    slug: 'cerseil',
	    picture: 'https://lh5.googleusercontent.com/-R_3u3oMiJZ0/AAAAAAAAAAI/AAAAAAAAAAA/-jl9VTR28bc/photo.jpg',
	    products: []
	  }
	];


	Haul.ApiKey = DS.Model.extend({
		accessToken: DS.attr('string'),
		user: DS.belongsTo('user', {
			async: true
		})
	});

	// Haul.UserSerializer =  DS.RESTSerializer.extend({
	// 	normalizePayload: function(store, payload) {

	// 		var data = {"user":[{
	// 				name: payload.data.name,
	// 				email: payload.data.email,
	// 				id: payload.data.user_id
	// 			}]
	// 		}; 

	// 	    return this._super(store, data);
	// 	}
	// });

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

