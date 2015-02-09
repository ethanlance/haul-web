import Ember from 'ember';
/*global $*/
export default Ember.Component.extend({	 
	page: null,
	currentPage: null,
	watchScroll:null,
	
	willDestroyElement: function(){
		if( this.get('page') === 'profileFeed' ){
	    	$(window).unbind('scroll');
	    	this.set('watchScroll', null);
	    }
		console.log("WILL willDestroyElement ", this.get('page'))
	    if( this.get('page') === "postEdit") {
			$('.toolbar-footer').remove();
	    }
  	},

  	parentViewDidChange: function(){
  		console.log('parentViewDidChange');
  	},

	didInsertElement: function() {
 
		var page = this.get('page');
		this.set('currentPage', page);

		console.log("NEW CURRENT PAGE", page);


		
		if(page === "postEdit"){
			this.postEdit();
			return;
		}

		if(page === "postPage"){
			this.postPage();	
			return;
		}

		if(page === "feedPage"){
			this.profileFeed();
			return
		}
		
	},

	postEdit: function() {
		this.set('showHeader', false);

		var toolbars = $('.toolbar-footer');
		$('.liquid-container').after(toolbars);
		$('.liquid-container').find('.toolbar-footer').remove();
		console.log(toolbars)
		// toolbars.each(function(toolbar){
		// 	console.log("TOOLBAR", $(this))
		// 	$('.liquid-container').before(toolbars[toolbar]);
		// });
	},

	postPage: function() {
		this.set('showHeader', true);	
		var logo = $(".logo");
		var nav = $("nav");
		var fixThis = $(".profile-container");
		var header = $(".profile-container").parent();
		var postBackButton = $(".post-back-button");
		var listGridButton = $('.btn-list-grid');

		fixThis.addClass('fixed');
		header.addClass('shrink');
		postBackButton.removeClass('hide').addClass('show');
		logo.addClass('shrink');

		if(listGridButton){
			listGridButton.removeClass('show').addClass('hide');
		}
	},

	profileFeed: function() {
		this.set('showHeader', true);	


		var logo = $(".logo");
		var nav = $("nav");
		var fixThis = $(".profile-container");
		var header = $(".profile-container").parent();
		var postBackButton = $(".post-back-button");
		var listGridButton = $('.btn-list-grid');


		Ember.run.later(this,function(){
			fixThis.removeClass('fixed');

			postBackButton.removeClass('show').addClass('hide');
	    	 
			fixThis.append(listGridButton.parent());
		  	

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
					if (callNow){
						func.apply(context, args);
					}
				};
			};

			
			var _this = this;
			var watchScroll = debounce( function() { 

				//does post-page exist?
				if(!Ember.isEmpty($('.post-page'))){
					//console.log("STOP", $(".post-page"));
					Ember.run.later(this, _this.get("watchScroll"), 200);
					return;
				}

		    	
		    	var scrollTop = $(window).scrollTop();
		    	var navBottom = nav.height();
				var fixTop = fixThis.parent().position().top - scrollTop + 50;

		    	if( fixTop <= navBottom){
		       		//console.log("ADD " + fixTop + " <= "+ navBottom) 
		        	fixThis.addClass('fixed');  
		        	logo.addClass('shrink'); 
		        	 header.addClass('shrink');
		        	if(listGridButton){
		        		listGridButton.addClass('fixed'); 
		        	} 
		        }else{
		        	//console.log("REMOVE " + _this.isFeedPage +  "  " + fixTop + " > "+ navBottom)
		        	fixThis.removeClass('fixed');  
		        	logo.removeClass('shrink'); 
		        	header.removeClass('shrink');
		        	if(listGridButton){
		        		listGridButton.removeClass('fixed'); 
		        	} 
		        }
		    
			}, 10);

			this.set('watchScroll', watchScroll);

			$(window).bind('scroll', this.get('watchScroll'));
		}, 300);
	}
});