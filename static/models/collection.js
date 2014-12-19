
//Models
Haul.Collection = DS.Model.extend(Ember.Validations.Mixin, {

	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ), 
	user: DS.belongsTo('user'),
	slug: DS.attr( 'string' ),
	isFollowedByCount: DS.belongsTo('collection-is-followed-by-count'), 

	iconBinding: "image.thumb", 
	image: DS.belongsTo('image'),
	image_id: DS.attr('string'), 
	//imageIdChanged is fired when a new image_id is assigned to the model.
	//this happens when a user uploads a new user icon for their collection.
	imageIdChanged: function() {
		this.getIconImage();
	}.observes('image_id'),

	//getIconImage asks the API for the collection image.
	//If the size thumb is not retured it asks the API for the image again for "retryTimes" times.
	//When a user uploads a new collection profile image it takes time for the image resizer to crunch
	//all the image sizes.
	getIconImage: function() {
		var _this = this;
		var image_id = this.get('image_id');
		if( !image_id ) return;
		
		var i = 0;
		var retryTimes = 10;
		var retryWait = 2000;

		//If no thumb returns, then try again.
		//This happens when icons are uploaded, the image
		//takes time to crunch.
		function waitingForResponse() {
			i++;
			_this.store.find('image', image_id)
			.then(function(image){
				return image.reload();	
			}).then(function(image) { 
				if( !image.get('thumb') && i < retryTimes ) { 
				} else { 
					window.clearInterval(_this.getThumbInterval);
					_this.set('image', image);
				} 
			});
		} 

		//Get the thumb
		_this.store.find('image', image_id)
		.then(function(image){ 
			return image; 
		}).then(function(image) { 
			if( !image.get('thumb') && i < retryTimes ) { 
				_this.getThumbInterval = setInterval(function () { 
					waitingForResponse();
				}, retryWait); 
			} else {
				_this.set('image', image);
			}
		});
	},

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 3, maximum: 50 }
		},
		description: {
		 	// presence: true,
		 	length: { maximum: 500 }
		}
	}
});	



Haul.CollectionAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/stores/" + id; 
        return this.ajax(url, 'GET');
    },

	findMany: function(store, type, ids) { 
		if( ids.length < 2 ){
			var url = this.host + "/stores/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			var url = this.host + "/stores";
			console.log("IDS", ids)
			return this.ajax(url, 'GET', { data: { store_ids: ids } });
		}
	}, 

	setDescription: function(){
		var description = this.get('currentUser').get('name') + " hasn't written a description yet."
		return description;
	},

	updateRecord: function(store, type, record) {
		
		var description = record.get('description');
		if(!description) {
			description = this.setDescription();
		} 

		var data = {
			name: record.get('name'),
			description: description,
			user_id: record.get('user_id')
		}

        var store_id = record.get('id');
		var url = this.host + "/stores/" + store_id;

		return this.ajax(url, "PUT", { data: data });
	},

	createRecord: function(store, type, record) {

		var description = record.get('description');
		if(!description) {
			description = this.setDescription();
		} 

		var data = {
			name: record.get('name'),
			description: description,
			user_id: record.get('user_id')
		}
		
		var url = this.host + "/stores";
		return this.ajax(url, "POST", { data: data }); 
	}
});
 

Haul.CollectionSerializer =  DS.RESTSerializer.extend({
	
	extractFindMany: function(store, type, payload){
		if( payload.data.type === "store" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){ 
			return;
		}
 
		var data = {
			id: payload.data.store_id,	
			name: payload.data.name,
			slug: payload.data.slug,
			description: payload.data.description,
			user: payload.data.user_id,
			user_id: payload.data.user_id,
			isFollowedByCount: payload.data.store_id,
			image: payload.data.image_id
		};


		// if( payload.data.product_ids){
		// 	data['products'] = payload.data.product_ids
		// }

		var payload = {'collection': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){ 
			return;
		}
 		
 		var data = [];
		data = payload.data.map(function(result){ 
			return {
				id: result.store_id,	
				name: result.name,
				slug: result.slug,
				description: result.description,
				user: result.user_id,
				user_id: result.user_id,
				isFollowedByCount: result.store_id,
				image: result.image_id
			} 
		});


		// if( payload.data.product_ids){
		// 	data['products'] = payload.data.product_ids
		// }

		var payload = {'collection': data}; 
		return this._super(store, primaryType, payload);
	},
});


