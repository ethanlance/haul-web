import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.Component.extend(ErrorMixin, {

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	buttonText: 'save',

	showForm: false,

	showList: false,

	showAddress: false,

	showDelete: false,

	selectedAddress: null,

	addresses: null,

	selected_address_id: null,

	statesReady: false,

	hasAddressList: Ember.computed.notEmpty('addresses'),

	show: null,

	showListChanged: function() {
		if(this.get('showList')){
			this.set('selectedAddress', null);
		}
	}.observes('showList'),

	selectedAddressChanged: function() {
		if( !Ember.isEmpty(this.get('selectedAddress'))) {
			this.set('selected_address_id', this.get('selectedAddress.id'));
		}else{ 
			this.set('selected_address_id', null);
		}
	}.observes('selectedAddress'),

	didInsertElement: function() {
		
		if(Ember.isEmpty(this.get('currentUserId')) ) {
			return;
		}

		this.displayAddressList(true);

	}.observes('currentUserId'),

	resetSelectedAddress: function() {

		this.set('selectedAddress', null);

		this.getAddressList();

		this.set('show', 'showList');
	},

	showChanged: function() {
		var show = this.get('show');
		this.set('showList', false);
		this.set('showForm', false);
		this.set('showAddress', false);
		this.set('showDelete', false);
		
		this.set(show, true);	
	}.observes('show'),


	displayAddressList: function(start) {
		var _this = this;
		var promise = this.getAddressList();

		promise.then(
			function success(addresses){

				if( Ember.isEmpty(addresses) ){
					_this.createModel();
					_this.set('show', 'showForm');
				}else{
					
					var buyer_address = addresses.get('content').get('firstObject');
					
					var promise = _this.getAddressById(buyer_address.id);

					promise.then(function(result){
						_this.createModel(result);
					});
					
					if(start) {
						_this.displayAddress(addresses.get('firstObject.id'));
					}

					_this.set('show', 'showList');	
				}

			}	
		);
	},
	
	displayAddress: function(id) {

		var _this = this;

		var promise = this.getAddressById( id );
		promise.then(
			function success(result){
				_this.set('selectedAddress', result);
				_this.set('show', 'showAddress');
			}
		);
		
	},

	displayAddressToEdit: function(id) {

		var _this = this;
		var promise = this.getAddressById( id );
		promise.then(
			function success(address){
				
				_this.set('selectedAddress', address);

				_this.createModel(address);
		
				_this.set('show', 'showForm');

			}
		);
	},

	displayAddressToRemove: function(id) {

		var _this = this;
		var promise = this.getAddressById( id );
		promise.then(
			function success(address){
				
				_this.set('selectedAddress', address);

				_this.createModel(address);
		
				_this.set('show', 'showDelete');

			}
		);

	},

	displayCreateNewAddress: function() {

		this.createModel();
		
		this.set('show', 'showForm');	
	},

 
 	getAddressById: function(id) {
		
		var store = this.container.lookup("store:main");
		
		return store.find('buyer-address', id);
	},

	getAddressList: function() {

		var _this = this;
		var store = this.container.lookup("store:main");
		var userId = this.get('currentUserId');

		return store.find('buyer-address-list', {user_id: userId} )
		.then(function(addresses){
			_this.set('addresses', addresses);
			return addresses;
		});

	}.observes('currentUserId'),

	createModel: function(model) {

		
		if(Ember.isEmpty(model)){
			var store = this.container.lookup("store:main");
			model = store.createRecord('buyer-address');
		}	


		var states_list = [];
		var selectedState;
		var states = this.get('state_list');

		states.forEach(function( state ) {
			if(state.abbreviation === model.get('state')) {
				selectedState = state;
			}
			states_list.push(state);
		});	

		var state_options = Ember.ArrayController.create({
		  selectedState: selectedState,
		  states: states_list,
		}); 
		this.set('state_options', state_options);

		this.set('statesReady', true);

		this.set('model', model);

	},


	cancelAddressForm: function() {
		var selectedAddress = this.get('selectedAddress');
		if( Ember.isEmpty(selectedAddress) ){
			this.set('show', 'showList');
		}else{
			this.set('show', 'showAddress');
		}
	},

	deleteAddress: function() {
		
		var _this = this;
		
		var model = this.get('model');		
		
		var id = model.id;
		
		var store = this.container.lookup("store:main");

		model.deleteRecord();

		model.save()
		.then(
			function success() {
				var record = store.getById('buyer-address-list', id);
				store.unloadRecord(record);
				_this.resetSelectedAddress();
			},

			function error() {

			}
		);
	},


	saveAddress: function() {

		var _this = this;
		var model = this.get('model');

		try {
			model.set('user_id', this.get('currentUser').id);
			model.set('state', this.get('state_options').get('selectedState').abbreviation);
		}catch(e){
			
		}

		model.validate()
		.then(
			function(){
				return model.save();
			}
		)
		.then(
			function success(results){
				console.log("SUCCESS", results);
				_this.set('isProcessing', false);
				_this.displayAddress(results.id);
				_this.getAddressList();
			},
			function failed(error){
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
				_this.handleServerError(error);
			}
		);

	},

	

	actions: {

		doSubmitAddressForm: function() {
			this.saveAddress();
		},

		doRemoveAddress: function() {
			this.deleteAddress();
		},

		doCancelAddressForm: function() {
			this.cancelAddressForm();
		},

		selectThisAddressId: function(id) {
			this.displayAddress(id);
		},

		showCreateNewAddress: function() {
			this.displayCreateNewAddress();
		},

		showEditAddress: function(id) {
			this.displayAddressToEdit(id);
		},

		showRemoveAddress: function(id) {
			this.displayAddressToRemove(id);
		},

		showAddressList: function() {
			this.set('show', 'showList');
		},
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
		];
	}.property(),

});