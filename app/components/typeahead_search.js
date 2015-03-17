import Ember from 'ember';
import config from '../config/environment';
var Haul = config.APP;
/*global Bloodhound*/
/*global Handlebars*/
/*global $*/

export default Ember.Component.extend({

	searchType: 'tag',
	searchSymbol: '#',
	searchSymbols: {
		'tag':'#',
		'user':'@',
		'post':'<span class="glyphicon glyphicon-search"></span>',
	},

	toggle: false,

	user: false,
	post: false,

	user_tokenBinding: 'session.currentUser.access_token',

	didInsertElement: function() {
		var _this = this;
		
		var search = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  remote: {
		  	url:Haul.Server.SEARCH_SERVER_HOST,
		  	ajax: {
            	beforeSend: function(jqXHR) {
               		jqXHR.setRequestHeader('Authorization', 'Bearer ' + _this.user_token);
           		}
       		},
       		filter: function(response) {
       			var data = response.data.map(function(result){

       				//Image:
       				var image;
       				if( result.facebook_user_id ) {
       					image = "https://graph.facebook.com/" + result.facebook_user_id + "/picture?width=20";
       				}else if( result.image_id) {
       					image = "http://static.haul.io/images/local/"+result.image_id+"/thumb";
       				}

       				


       				if( result.type === "search_tag") {
       					var tag_total = result.total;
       					var total = "";
       					if( tag_total === 1) {
       						total = "1 post";
       					}else{
       						total = tag_total + " post";
       					}

       					return { 
       						name: result.name,  
       						total: total
       					}



       				}else if( result.type === "search_user") {

       					var follows_total = result.follows_total;
       					var total = "";
       					if( follows_total === 1) {
       						total = "1 follower";
       					}else{
       						total = follows_total + " followers";
       					}

       					return { 
       						name: result.name,  
       						username: result.username,
       						total: total,
       						image: image,
       					}



       				}else if( result.type === "search_post") {

       					var user_id = result.post_id.split("_")[0];

						var total = result.likes_total + ' <span class="glyphicon glyphicon-heart"></span> '
						+ result.comments_total + ' <span class="glyphicon glyphicon-comment"></span>';

						
       					return {
       						user_id: user_id,
       						post_id: result.post_id,
       						name: result.subject,
       						total: total,
       						image: 	image,
       					}

       				}

       				result.searchSymbol = _this.get('searchSymbol');

       				return result;
       			});

       			return data;
       		},
       		replace: function(url,query){ 
       			if( _this.get('searchType') === "tag"){
       				url = '/search/tags?query=' + query;
       			}else if( _this.get('searchType') === "user"){
       				url = '/search/users?query=' + query;
       			}else if( _this.get('searchType') === "post"){
       				url = '/search/posts?query=' + query;
       			}
       			url = Haul.Server.SEARCH_SERVER_HOST + url;
       			return url;
       		}
		  }
		});
		 
		search.initialize();

		_this.set('search', search);

		 
		$('.search-wrapper input').typeahead(null, {
			name: 'search', 
			highlight: true,
			displayKey: 'name',
			source: search.ttAdapter(),
			templates: {
		  		suggestion: Handlebars.compile([

					'<div class="tt-dataset-row">{{#if image}}<div class="tt-search-image">',
						'<img src="{{image}}">',
					'</div>{{/if}}',
					'<div class="tt-search-result">',
						'{{searchSymbol}}{{name}}',
					'</div>',
					'<div class="tt-search-meta">',
						'{{#if total}} {{{total}}}{{/if}}',
					'</div></div>',

		  		].join('\n'))
			}
		});

		//EVENTS
		$('.search-wrapper input').bind('typeahead:selected', function(obj, data) {   
			var type = _this.get('searchType');
			var store = _this.container.lookup('store:main'); 


			//Post Search
			if( type === "post" ){
				console.log("POST");

				store.find('user', data.user_id)	
				.then(function(user){
					_this.set('user', user);
					return store.find('post', data.post_id)
				})
				.then(function(post){
					_this.set('post', post);

					console.log("SEARCH? POST" , post);

					_this.sendAction('goToRoute', 'profile.post', _this.get('user'), post);	
				})


			//User Search
			}else if( type === "user" ){
				console.log("username ", data.username	)
				_this.sendAction('goToRoute', 'profile', data.username);


			//Hash Tag Search
			}else{
				_this.sendAction('goToRoute', 'search', {queryParams: {type:type, q:data.name}});	
			}
		    
		});

		//this.changeSearchType('tag');
	},

	changeSearchType: function(arg) {
		this.set('searchType', arg); 
		this.set('searchSymbol', this.get('searchSymbols')[arg]);
		
		var input = $('input.form-control.tt-query.tt-input');
		var theVal = input.val();
		input.typeahead('val', '')
		input.focus().typeahead('val',theVal).focus(); 
	},

	actions: {
		toggle: function() {
			this.set('toggle', !this.get('toggle'));
		},

		changeSearchType: function(arg) {
			this.changeSearchType(arg);
		}
	}
});