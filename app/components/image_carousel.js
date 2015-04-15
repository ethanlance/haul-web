import Ember from 'ember'; 

export default Ember.Component.extend({	
	//layoutName: 'modules/carousel',
	classNames: ['carousel', 'slide'],
	
	singleImage: true,

	imagesFound: false,

	imageCount:0,

	imageSizeName: 'small',

	imageCountChanged: function() {
		if(this.get('imageCount') > 1 ){
			this.set('singleImage', false);
		}else{
			this.set('singleImage', true);
		}
	}.observes('imageCount'),



	start: function() { 
		this._super.apply(this, arguments);
		// disable the data api from boostrap


		//console.log("CAROUSEL RELOAD")


		//$(document).off('.data-api');	 
		var _this = this;
		// at least one item must have the active class, so we set the first here, and the class will be added by class binding
		this.get('content').then(function(results) { 

			//console.log("IMAGES", results);

			var imageCount = 0;
			var i = 0;
			results.forEach(function(image){ 

				if( image.get('medium') ) {
					imageCount++;
					_this.set('imagesFound', true);
				}
				Ember.set(image, 'isActive', false);

				if(i==1){
					Ember.set(image, 'isActive', true);					
				}

				i++;
			});

			if( imageCount === 1) {
				var obj = Ember.get(results, 'firstObject');
				if( obj ) {
					Ember.set(obj, 'isActive', true);	
				}
			}

			_this.set('imageCount', imageCount);
			
			return results;
		}, function(error){
			console.log("ERROR " , error);
		}); 




	}.on('init'),//.observes('content.@each'),

	actions: {
		previousSlide: function() {
			this.$().carousel('prev');
		},
		nextSlide: function() {
			this.$().carousel('next');
		},
		didInsertElement: function() {
			this.$().carousel('next');
		}	
	},

	indicatorsView: Ember.CollectionView.extend({
		tagName: 'ol',
		classNames: ['carousel-indicators'],	
		contentBinding: 'parentView.content',
		itemViewClass: Ember.View.extend({
			click: function() {
				var $elem = this.get("parentView.parentView").$();
				$elem.carousel(this.get("contentIndex"));
			},
			template: Ember.Handlebars.compile(''),
			classNameBindings: ['content.isActive:active']			
		})
	}),
	itemsView: Ember.CollectionView.extend({		
		classNames: ['carousel-inner'],
		contentBinding: 'parentView.content',
		itemViewClass: Ember.View.extend({
			classNames: ['item'],
			classNameBindings: ['content.isActive:active'],
			template: Ember.Handlebars.compile('{{#light-box href=view.content.large data-lightbox="test" data-title="title" inlineImage=false}}<img {{bind-attr src="view.content.small"}} alt=""/>{{/light-box}}<div class="carousel-caption"><h4>{{view.content.title}}</h4><p>{{view.content.content}}</p></div>')
		})
	})
});






