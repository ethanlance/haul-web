/*global Products, Ember */

    Haul.Image = DS.Model.extend({
    	src: DS.attr('string') 
    });

    Haul.Comment = DS.Model.extend({
    	product: DS.belongsTo('product'),
    	user: DS.belongsTo('user'),
    	body: DS.attr('string')
    });

    //Models
	Haul.Product = DS.Model.extend({
		title: DS.attr( 'string' ),
		slug: DS.attr( 'slug' ),
		description: DS.attr( 'string' ),
		price: DS.attr( 'string' ),
		user: DS.belongsTo('user'),
		images: DS.hasMany('image',{async:true}),
		comments: DS.hasMany('comment',{async:true}),
		sold: DS.attr('boolean', {defaultValue: false}),

        firstImage: function() {
        	var promise = this.get('images').then(function(results) {
        		return Ember.get(results, 'firstObject').get('src');
        	});
			return DS.PromiseObject.create({
      			promise: promise
   			});
        }.property('images'), 
	});



