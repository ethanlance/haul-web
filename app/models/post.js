import Ember from "ember";
import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	//Keep these as helpers.
	post_id: DS.attr('string'),
	user_id: DS.attr('string'),	
		
	//POST
	user: DS.belongsTo('user', {async:true}),

	tags: DS.attr('string'),
	subject: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),
	updated_at: DS.attr('string'),
	created_at: DS.attr('string'),
	
	//REPOST aka parent post
    repost_body: DS.attr('string'),
    repost: DS.belongsTo('post', {async:true}),
    repost_user: DS.belongsTo('user', {async:true}),
    repost_id: DS.attr('string'),
    
	//PRODUCT
	product_user_id: DS.attr('string'),
	product_user: DS.belongsTo('user', {async:true}),	
	product_images: DS.hasMany('image', {async:true}),
	product_currency: DS.attr('string'),
	product_price: DS.attr('string'),
	product_shipping: DS.attr('string'),
	product_quantity: DS.attr('string'),
	product_name: DS.attr('string'),
	product_description: DS.attr('string'),
	product_link: DS.attr('string'),
	product_status: DS.attr('string'),

	product_id: DS.attr('string'),

	commentCount: DS.belongsTo('comment-count', {async:true}),
	likesCount: DS.belongsTo('post-likes-count', {async:true}),

	
	isForSale: function() {
		var product_status = this.get('product_status');
		if( product_status == 'FOR_SALE'  ||  product_status == 'FOR_SALE_OFFSITE' ) {
			return true;
		}else{
			return false;
		}
	}.property('product_status'),


	isForSaleOffsite: function() {
		var product_status = this.get('product_status');

		if( product_status === 'FOR_SALE_OFFSITE' ) {
			return true;
		}else{
			return false;
		}
		
	}.property('product_status'),


	postHasImage: function() {
		//Does the body have an image?
		var body = this.get('body');
		console.log("BODY", body);
		if( body && body.indexOf("[img") > -1 ) {
			return true;
		}else{
			return false;
		}

	}.property('body'),

	//Is the owner of the post selling this?  Or blogging?
	postOwnerIsSeller: function() {

		if( this.get('user_id') === this.get('product_user_id') && this.get('product_status') !== 'FOR_SALE_OFFSITE' ){
			return true;
		}else{
			return false;
		}

	}.property('product_status', 'user_id', 'product_user_id'),

	product_status_text: function() {
		var product_status = this.get('product_status');
		if( product_status === 'FOR_SALE' || product_status === "FOR_SALE_OFFSITE" ) {
			return "FOR SALE";
		}else if( product_status === "SOLD") {
			return "SOLD!";
		}else{
			return "Not For Sale";
		}
	}.property('product_status'),

	post_slug: function() {		
		if(!Ember.isEmpty(this.get('subject'))){
			return this.get('subject').toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		}
	}.property('subject'),

	make_url: function() {
		return this.ENV.baseDomain + "/" + this.get('user.username') + "/" + this.get('post_id') + "/" + this.get('post_slug');
	},

	validateImagePath: function() {
		return this.ENV.validateImagePath;
	}.property(),

	validateImageHost: function() {
		return this.ENV.validateImageHost;
	}.property(),

	validations: { 
		body: {
		 	///presence: true,
		 	length: { maximum: 12000 },
			//image: {message:'Sorry, only images from the product can go in your post'},
		},
		subject: {
		 	presence: true
		},
		product_status: {
		 	presence: true
		},
		product_name: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		product_description: {
		 	presence: true,
		 	length: { maximum: 2000 }
		},
		product_quantity: {
			numericality: {greaterThan:0, onlyInteger:true},
		 	presence: true,
		},
		product_shipping: {
			numericality: {
				onlyInteger:true,
			}
		},
		// product_link: {
		// 	dependent: {
				
		// 	}
		// },
		product_price: {
			numericality: {
				greaterThan:5, 
				onlyInteger:true,
				//messages: {notAnInteger:'Whole numbers only, no decimals, no punctuation'}
			},
		 	presence: true,
		}
	}
});	
