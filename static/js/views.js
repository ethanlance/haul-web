/*global Products, Ember */
(function () {
  'use strict';

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
	  Holder.run(); 

	}
  });




Haul.CarouselView = Ember.View.extend({	
	templateName: 'modules/carousel',
	classNames: ['carousel', 'slide'],
	init: function() { 
		this._super.apply(this, arguments);
		// disable the data api from boostrap
		$(document).off('.data-api');	  
		// at least one item must have the active class, so we set the first here, and the class will be added by class binding
		var promise = this.get('content').then(function(results) { 

			var obj = Ember.get(results, 'firstObject');
			Ember.set(obj, 'isActive', true);

			return results;
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
				<img {{bindAttr src="view.content.src"}} alt=""/>\
				<div class="carousel-caption">\
					<h4>{{view.content.title}}</h4>\
					<p>{{view.content.content}}</p>\
				</div>')
		})
	})
});
  
  
})();
