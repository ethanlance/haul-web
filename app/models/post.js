import Ember from "ember";
import DS from "ember-data";
var Config = Haul;
export default DS.Model.extend(Ember.Validations.Mixin, {
	
	//Keep these as helpers.
	post_id: DS.attr('string'),
	user_id: DS.attr('string'),	
		
	//POST
	user: DS.belongsTo('user', {async:true}),

	subject: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),
	updated_at: DS.attr('string'),
	
	//REPOST aka parent post
    repost_body: DS.attr('string'),
    repost: DS.belongsTo('post', {async:true}),
    repost_user: DS.belongsTo('user', {async:true}),

	//PRODUCT
	product_user: DS.belongsTo('user', {async:true}),	
	product_images: DS.hasMany('image', {async:true}),
	product_currency: DS.attr('string'),
	product_price: DS.attr('string'),
	product_quantity: DS.attr('string'),
	product_name: DS.attr('string'),
	product_description: DS.attr('string'),
	product_link: DS.attr('string'),
	product_status: DS.attr('string'),

	product_id: DS.attr('string'),

	commentCount: DS.belongsTo('post-comment-count', {async:true}),
	likesCount: DS.belongsTo('post-likes-count', {async:true}),

	post_slug: function() {		
		if(!Ember.isEmpty(this.get('subject'))){
			return this.get('subject').toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
		}
	}.property('subject'),

	

	validations: { 
		body: {
		 	presence: true,
		 	length: { maximum: 12000, minimum: 0 },
			images: {message:'Sorry, only images from the product can go in your post'},
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
		product_price: {
			numericality: {
				greaterThan:0, 
				onlyInteger:true,
				//messages: {notAnInteger:'Whole numbers only, no decimals, no punctuation'}
			},
		 	presence: true,
		}
	}
});	


(function() {
Ember.Validations.validators.local.Images = Ember.Validations.validators.Base.extend({
  call: function() {
	var hostname = "haul.io"
	if(Config.Server.environment === "development" ){
		hostname = "localhost:8081"
	}
  	var body = this.model.get(this.property);
  	if(Ember.isEmpty(body)){return;}
	var dom = document.createElement('div').innerHTML = body;
	if(dom){
		var imgs = Ember.$(dom).find('img').toArray();
		var _this = this;
		imgs.forEach(function(img){
			var parser = document.createElement('a');
			parser.href = img.src;
			var pathParts = parser.pathname.split('/');
			if(pathParts[1] !== "static.haul.io" && parser.hostname !== hostname) {
				 //console.log("VALIDATION FAILS! ", img.src , parser.hostname, hostname)
				 _this.errors.pushObject(_this.options.message);
			}
		});
	}
  }
});
})();