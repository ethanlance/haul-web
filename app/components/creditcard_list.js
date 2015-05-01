import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
/* Global braintree */
export default Ember.Component.extend(ErrorMixin, {

	braintreeClientTokenBinding: 'this.ENV.braintreeClientToken',

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	transactions: null,

	showForm: false,

	showList: false,

	showCard: false,

	showDelete: false,

	selectedCard: null,

	cards: null,

	hasCardList: Ember.computed.notEmpty('cards'),

	show: null,

	selectedCardChanged: function() {
		if( !Ember.isEmpty(this.get('selectedCard'))) {
			this.sendAction('selected_payment_id', this.get('selectedCard.id'));
		}
	}.observes('selectedCard'),

	didInsertElement: function() {
		
		if(Ember.isEmpty(this.get('currentUserId')) ) {
			return;
		}

		this.displayCardList(true);

	}.observes('currentUserId'),

	resetSelectedCard: function() {

		this.set('selectedCard', null);

		this.getCardList();

		this.set('show', 'showList');
	},

	showChanged: function() {
		var show = this.get('show');
		this.set('showList', false);
		this.set('showForm', false);
		this.set('showCard', false);
		this.set('showDelete', false);
		
		this.set(show, true);	
	}.observes('show'),


	displayCardList: function(start) {
		var _this = this;
		var promise = this.getCardList();

		promise.then(
			function success(cards){

				if( Ember.isEmpty(cards) ){
					_this.createModel();
					_this.set('show', 'showForm');
				}else{
					
					var buyer_card = cards.get('content').get('firstObject');
					
					var promise = _this.getCardById(buyer_card.id);

					promise.then(function(result){
						_this.createModel(result);
					});
					
					if(start) {
						_this.displayCard(cards.get('firstObject.id'));
					}

					_this.set('show', 'showList');	

				}

			}	
		);
	},
	
	displayCard: function(id) {

		var _this = this;

		var promise = this.getCardById( id );
		promise.then(
			function success(result){
				_this.set('selectedCard', result);
				_this.set('show', 'showCard');
			}
		);

		
	},

	displayCardToEdit: function(id) {

		var _this = this;
		var promise = this.getCardById( id );
		promise.then(
			function success(card){
				
				_this.set('selectedCard', card);

				_this.createModel(card);
		
				_this.set('show', 'showForm');

			}
		);
	},

	displayCardToRemove: function(id) {

		var _this = this;
		var promise = this.getCardById( id );
		promise.then(
			function success(card){
				
				_this.set('selectedCard', card);

				_this.createModel(card);
		
				_this.set('show', 'showDelete');

			}
		);

	},

	displayCreateNewCard: function() {

		this.createModel();
		
		this.set('show', 'showForm');	
	},

 
 	getCardById: function(id) {
		
		var store = this.container.lookup("store:main");
		
		return store.find('payment-method', id);
	},

	getCardList: function() {

		var _this = this;
		var store = this.container.lookup("store:main");
		var userId = this.get('currentUserId');

		return store.find('payment-method-list', {user_id: userId} )
		.then(function(cards){
			_this.set('cards', cards);
			return cards;
		});

	}.observes('currentUserId'),

	createModel: function(model) {

		
		if(Ember.isEmpty(model)){
			var store = this.container.lookup("store:main");
			model = store.createRecord('payment-method');
		}	

		this.set('model', model);

	},


	cancelCardForm: function() {
		var selectedCard = this.get('selectedCard');
		if( Ember.isEmpty(selectedCard) ){
			this.set('show', 'showList');
		}else{
			this.set('show', 'showCard');
		}
	},

	deleteCard: function() {
		
		var _this = this;
		
		var model = this.get('model');		
		
		var id = model.id;
		
		var store = this.container.lookup("store:main");

		model.deleteRecord();

		model.save()
		.then(
			function success() {
				var record = store.getById('payment-method-list', id);
				store.unloadRecord(record);
				_this.resetSelectedCard();
			},

			function error() {

			}
		);
	},



	tokenReady: function() {

		if(Ember.isEmpty(this.get('token'))){
			return;
		}
		
		var store = this.container.lookup("store:main");

		var model = store.createRecord('payment-method');

		this.set('model', model);

	}.observes('token'),

	makeToken: function() {

		//buyerId must exist for us to continue
		if(!this.get('currentUserId')) {
			return;
		}

		var _this = this;
		var user_id = this.get('currentUser').id;
		var host = this.ENV.Server.PROSPER_SERVER_HOST;
		var url = host + "/buyers/" + user_id + "/tokens";
		var type = "GET";
		var bearer = this.get('currentUser').get('access_token');

		var promise = Ember.$.ajax({
			url:         url,
			type:        type,
			dataType:    'json',
			contentType: 'application/x-www-form-urlencoded',
			headers: {
				Authorization: 'Bearer ' + bearer
			},
		});

		promise.then(
			function success(result) {
				_this.set('token', result.data.value);
			},
			function failed(error){
				console.log("ERROR", error);
			}
		);

	}.observes('currentUserId'),

	saveCard: function() {

		var _this = this;
		var model = this.get('model');
		var token = this.get('token');

		

		
		model.validate()
		.then(

			//Get the nonce from braintree:
			function(){

				return new Ember.RSVP.Promise(function(resolve, reject) {
					
					var client = new braintree.api.Client({clientToken: token});

					var data = {
						number: model.get('number'), 
						expirationDate: model.get('expiration'),
						cvv: model.get('cvv'),
						postal_code: model.get('postal_code'),
					};

					client.tokenizeCard(data, function (err, nonce) {
					  
					  	if(err) {
					  		reject(err);
					  	}

					  	resolve(nonce);
					});
				});
				
			}
		)
		.then(
			//save the nonce to Haul
			function(paymentNonce) {
				var bearer = _this.get('currentUser.access_token');

				var data = {
					'payment_method_nonce': paymentNonce,
				};

				var user_id = _this.get('currentUser.id');

				var host = _this.ENV.Server.PROSPER_SERVER_HOST;

				var url = host + '/buyers/'+ user_id +'/payments';
				
				return Ember.$.ajax({
					url:         url,
					type:        "PUT",
					data:        data,
					dataType:    'json',
					contentType: 'application/x-www-form-urlencoded',
					headers: {
						Authorization: 'Bearer ' + bearer
					},
				});
			}
		)
		.then(
			function success(results){
				console.log("SUCCESS", results);
				_this.set('isProcessing', false);
				_this.displayCard(results.data.payment_id);
				_this.getCardList();
			},
			function failed(error){
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
				_this.handleServerError(error);
			}
		);
	},

	actions: {

		doSubmitCardForm: function() {
			this.saveCard();
		},

		doRemoveCard: function() {
			this.deleteCard();
		},

		doCancelCardForm: function() {
			this.cancelCardForm();
		},

		selectThisCardId: function(id) {
			this.displayCard(id);
		},

		showCreateNewCard: function() {
			this.displayCreateNewCard();
		},

		showEditCard: function(id) {
			this.displayCardToCard(id);
		},

		showRemoveCard: function(id) {
			this.displayCardToRemove(id);
		},

		showCardList: function() {
			this.set('show', 'showList');
		}
	}
});