/*global Products, Ember */
(function () {
  'use strict';


	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	var toolbarScroll;
	toolbarScroll = debounce( function() { 
		var toolbar = $(".toolbar");
        if(toolbar){ 
        	var haulNavbarH = $('.haul-navbar').height(); 
        	var distanceY = window.pageYOffset;
	        if( distanceY > haulNavbarH ){
	        	toolbar.addClass('fixed');
	        }else{
	        	toolbar.removeClass('fixed');
	        }
	    } 
	}, 10);

	function init() {
		window.addEventListener('scroll', toolbarScroll);
	}
	window.onload = init();
		

	Haul.Resizing = Em.Mixin.create({
		bindResizing: function(opts) {
			var onResize, _this = this;
 
			onResize = debounce(function(){ 
				return _this.resized(); 
			}, 250);
			  
			$(window).bind('resize', onResize);
		},

		unbindResizing: function() {
			$(window).unbind('resize'); 
		}
	});

	Haul.Scrolling = Em.Mixin.create({
		bindScrolling: function(opts) {
			var onScroll, _this = this;
 
			onScroll = debounce(function(){ 
				return _this.scrolled(); 
			}, 0);
			 
			$(document).bind('touchmove', onScroll);
			$(window).bind('scroll', onScroll);
		},

		unbindScrolling: function() {
			$(window).unbind('scroll');
			$(document).unbind('touchmove');
		}
	});


  	/**
	SORTABLE: 
  	**/
	Haul.JQuerySortableItemView = Ember.View.extend({
		templateName: 'components/image-order',		
	}); 

	Haul.JQuerySortableView = Ember.CollectionView.extend({
		
		contentBinding: 'controller',
		tagName: 'ul',
		classNames: ["sortable"],
		itemViewClass: Haul.JQuerySortableItemView, 
	 
		didInsertElement: function(){
			this._super();
			var controller = this.get('controller');

			//JQuery sortable component.
			this.$().sortable({
				update: function(event, ui) {
					var indexes = {};

					$(this).find('.item').each(function(index) {
						indexes[$(this).data('id')] = index;
					});

					//Tell the controller the new sort.
					controller.updateSortOrder(indexes);
				}
			}).disableSelection();
		}
	});





	Haul.SortableProductViewTemplate = Ember.View.extend({
		templateName: 'components/product-order',		
	}); 

	Haul.SortableProductView = Ember.CollectionView.extend({
		
		contentBinding: 'controller',
		tagName: 'ul',
		classNames: ["sortable"],
		itemViewClass: Haul.SortableProductViewTemplate, 
	 
		didInsertElement: function(){
			this._super();
			var controller = this.get('controller');

			//JQuery sortable component.
			this.$().sortable({
				update: function(event, ui) {
					var indexes = {};

					$(this).find('.item').each(function(index) {
						indexes[$(this).data('id')] = index;
					});

					//Tell the controller the new sort.
					controller.updateSortOrder(indexes);
				}
			}).disableSelection();
		}
	});




Ember.EasyForm.Config.registerWrapper('bs3-wrapper', {
	inputTemplate: 'form-fields/input',
	labelClass: 'control-label',
	inputClass: 'form-group',
	buttonClass: 'btn btn-primary',
	fieldErrorClass: 'has-error',
	errorClass: 'help-block'
});
 


  Ember.View.reopen({
	didInsertElement : function(){
		this._super();
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent : function(){
		// Holder.run(); 
		// console.log("ADD THIS HERE")
		//console.log("AFTER RENDER")
	}
  });




Haul.CarouselView = Ember.View.extend({	
	templateName: 'modules/carousel',
	classNames: ['carousel', 'slide'],
	
	singleImage: true,
	imagesFound: false,
	imageCount:0,

	imageCountChanged: function() {
		if(this.get('imageCount') > 1 ){
			this.set('singleImage', false);
		}else{
			this.set('singleImage', true);
		}
	}.observes('imageCount'),

	init: function() { 
		this._super.apply(this, arguments);
		// disable the data api from boostrap

		//$(document).off('.data-api');	 
		var _this = this;
		// at least one item must have the active class, so we set the first here, and the class will be added by class binding
		var promise = this.get('content').then(function(results) { 
			var imageCount = 0;
			results.forEach(function(image){
				if( image.get('medium') ) {
					imageCount++;
					_this.set('imagesFound', true);
				}
			});
			_this.set('imageCount', imageCount);
			var obj = Ember.get(results, 'firstObject');
			if( obj ) {
				Ember.set(obj, 'isActive', true);	
			}
			return results;
		}, function(error){
			console.log("ERROR " , error);
		}); 
	},
	actions: {
		previousSlide: function() {
			this.$().carousel('prev');
		},
		nextSlide: function() {
			this.$().carousel('next');
		},
		didInsertElement: function() {
			this.$().carousel();
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
			template: Ember.Handlebars.compile('\
				<img {{bind-attr src="view.content.medium"}} alt=""/>\
				<div class="carousel-caption">\
					<h4>{{view.content.title}}</h4>\
					<p>{{view.content.content}}</p>\
				</div>')
		})
	})
});
  
  
})();
