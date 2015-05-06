import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.Component.extend(ErrorMixin, {

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	isProcessing:false,

	show_form: false,

	show_seller: false,

	show_loading: true,

	model: null,

	dob: null,

	statesReady: false,

	showChanged: function() {
		this.set('show_loading', false);
		this.set('show_form', false);
		this.set('show_seller', false);
		this.set('show_'+this.get('show'), true);
	}.observes('show'),

	getSeller: function() {

		if(Ember.isEmpty(this.get('currentUserId')) ) {
			return;
		}

		var _this = this;
		var store = this.container.lookup("store:main");
		var userId = this.get('currentUserId');
		var user = this.get('currentUser');

		store.find('seller', userId).then(
			function success(record){

				//Seller exists.
				_this.set('model', record);

				_this.set('show', 'seller');

			},
			function failure(error){

				//Seller does not exist.
				var seller = store.createRecord('seller',{
					id: userId,
					user_id: userId,
					firstname: user.get('firstname'),
					lastname: user.get('lastname'),
					email: user.get('email'),
				});

				_this.set('model', seller);

				_this.set('show', 'form');


			}	
		);
	}.on('didInsertElement').observes('currentUserId'),

	modelReady: function() {

		var model = this.get('model');


		var states_list = [];
		var selectedState, selectedBusinessState;
		var states = this.get('state_list');

		this.set('dob_formated', moment.unix(model.get('dob')).format('MM-DD-YYYY'));

		//Seller state
		states.forEach(function( state ) {
			states_list.push(state);

			if(state.abbreviation === model.get('state')) {
				selectedState = state;
			}
				
			if(state.abbreviation === model.get('business_state')) {
				selectedBusinessState = state;
			}

		});	

		//Set state options
		var state_options = Ember.ArrayController.create({
		  selectedState: selectedState,
		  states: states_list,
		}); 
		this.set('state_options', state_options);

		//Set state options
		var business_state_options = Ember.ArrayController.create({
		  selectedState: selectedBusinessState,
		  states: states_list,
		}); 
		this.set('business_state_options', business_state_options);
this.set('statesReady', true);
	}.observes('model.id'),

	saveSeller: function() {

		var _this = this;
		var model = this.get('model');

		try {
			model.set('state', this.get('state_options').get('selectedState').abbreviation);
		}catch(e){
			
		}

		try{
			var dob = moment(this.get('dob_formated')).format('YYYY-M-D');
			model.set('dob', dob);
		}catch(e){}

		try {
			model.set('phone', model.get('phone').replace(/-/g,''));
		}catch(e){
			
		}

		try {
			model.set('business_state', this.get('business_state_options').get('selectedBusinessState').abbreviation);
		}catch(e){
			
		}
console.log("HERE? ", model.get('user_id'))
		model.validate()
		.then(
			function(){
				console.log("SAVE", model);
				return model.save();
			}
		)
		.then(
			function success(results){
				console.log("SUCCESS", results);
				_this.set('isProcessing', false);
				_this.set('model', model);
				_this.set('show', 'seller');
			},
			function failed(error){
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
				_this.handleServerError(error)
			}
		);

	},

	actions: {

		doSubmit: function() {
			this.saveSeller();
		},

		showEdit: function() {
			this.set('show', 'form');
		},

		submit: function() {
			this.saveSeller();
		}
	},

	state_list: function() {

		return [
		    {
		        "name": "Alabama",
		        "abbreviation": "AL"
		    },
		    {
		        "name": "Alaska",
		        "abbreviation": "AK"
		    },
		    {
		        "name": "American Samoa",
		        "abbreviation": "AS"
		    },
		    {
		        "name": "Arizona",
		        "abbreviation": "AZ"
		    },
		    {
		        "name": "Arkansas",
		        "abbreviation": "AR"
		    },
		    {
		        "name": "California",
		        "abbreviation": "CA"
		    },
		    {
		        "name": "Colorado",
		        "abbreviation": "CO"
		    },
		    {
		        "name": "Connecticut",
		        "abbreviation": "CT"
		    },
		    {
		        "name": "Delaware",
		        "abbreviation": "DE"
		    },
		    {
		        "name": "District Of Columbia",
		        "abbreviation": "DC"
		    },
		    {
		        "name": "Federated States Of Micronesia",
		        "abbreviation": "FM"
		    },
		    {
		        "name": "Florida",
		        "abbreviation": "FL"
		    },
		    {
		        "name": "Georgia",
		        "abbreviation": "GA"
		    },
		    {
		        "name": "Guam",
		        "abbreviation": "GU"
		    },
		    {
		        "name": "Hawaii",
		        "abbreviation": "HI"
		    },
		    {
		        "name": "Idaho",
		        "abbreviation": "ID"
		    },
		    {
		        "name": "Illinois",
		        "abbreviation": "IL"
		    },
		    {
		        "name": "Indiana",
		        "abbreviation": "IN"
		    },
		    {
		        "name": "Iowa",
		        "abbreviation": "IA"
		    },
		    {
		        "name": "Kansas",
		        "abbreviation": "KS"
		    },
		    {
		        "name": "Kentucky",
		        "abbreviation": "KY"
		    },
		    {
		        "name": "Louisiana",
		        "abbreviation": "LA"
		    },
		    {
		        "name": "Maine",
		        "abbreviation": "ME"
		    },
		    {
		        "name": "Marshall Islands",
		        "abbreviation": "MH"
		    },
		    {
		        "name": "Maryland",
		        "abbreviation": "MD"
		    },
		    {
		        "name": "Massachusetts",
		        "abbreviation": "MA"
		    },
		    {
		        "name": "Michigan",
		        "abbreviation": "MI"
		    },
		    {
		        "name": "Minnesota",
		        "abbreviation": "MN"
		    },
		    {
		        "name": "Mississippi",
		        "abbreviation": "MS"
		    },
		    {
		        "name": "Missouri",
		        "abbreviation": "MO"
		    },
		    {
		        "name": "Montana",
		        "abbreviation": "MT"
		    },
		    {
		        "name": "Nebraska",
		        "abbreviation": "NE"
		    },
		    {
		        "name": "Nevada",
		        "abbreviation": "NV"
		    },
		    {
		        "name": "New Hampshire",
		        "abbreviation": "NH"
		    },
		    {
		        "name": "New Jersey",
		        "abbreviation": "NJ"
		    },
		    {
		        "name": "New Mexico",
		        "abbreviation": "NM"
		    },
		    {
		        "name": "New York",
		        "abbreviation": "NY"
		    },
		    {
		        "name": "North Carolina",
		        "abbreviation": "NC"
		    },
		    {
		        "name": "North Dakota",
		        "abbreviation": "ND"
		    },
		    {
		        "name": "Northern Mariana Islands",
		        "abbreviation": "MP"
		    },
		    {
		        "name": "Ohio",
		        "abbreviation": "OH"
		    },
		    {
		        "name": "Oklahoma",
		        "abbreviation": "OK"
		    },
		    {
		        "name": "Oregon",
		        "abbreviation": "OR"
		    },
		    {
		        "name": "Palau",
		        "abbreviation": "PW"
		    },
		    {
		        "name": "Pennsylvania",
		        "abbreviation": "PA"
		    },
		    {
		        "name": "Puerto Rico",
		        "abbreviation": "PR"
		    },
		    {
		        "name": "Rhode Island",
		        "abbreviation": "RI"
		    },
		    {
		        "name": "South Carolina",
		        "abbreviation": "SC"
		    },
		    {
		        "name": "South Dakota",
		        "abbreviation": "SD"
		    },
		    {
		        "name": "Tennessee",
		        "abbreviation": "TN"
		    },
		    {
		        "name": "Texas",
		        "abbreviation": "TX"
		    },
		    {
		        "name": "Utah",
		        "abbreviation": "UT"
		    },
		    {
		        "name": "Vermont",
		        "abbreviation": "VT"
		    },
		    {
		        "name": "Virgin Islands",
		        "abbreviation": "VI"
		    },
		    {
		        "name": "Virginia",
		        "abbreviation": "VA"
		    },
		    {
		        "name": "Washington",
		        "abbreviation": "WA"
		    },
		    {
		        "name": "West Virginia",
		        "abbreviation": "WV"
		    },
		    {
		        "name": "Wisconsin",
		        "abbreviation": "WI"
		    },
		    {
		        "name": "Wyoming",
		        "abbreviation": "WY"
		    }
		]
	}.property(),
});