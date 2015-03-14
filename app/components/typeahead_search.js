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
		'post':'$',
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
       				result.searchSymbol = _this.get('searchSymbol');



       				if( result.facebook_user_id ) {
       					result.image = "https://graph.facebook.com/" + result.facebook_user_id + "/picture?width=20";
       				}else if( result.image_id) {
       					result.image = "http://static.haul.io/images/local/"+result.image_id+"/thumb";
       				}


       				if( _this.get('searchSymbol') == "$" ) {

       					var user_id = result.post_id.split("_")[0];
       					return {
       						user_id: user_id,
       						post_id: result.post_id,
       						name: result.subject,
       						image: result.image,
       						price: result.product_price,
       						comment_total: result.comment_total,
       						likes_total: result.likes_total
       					}
       				} 
 

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

		 
		$('.search-wrapper input').typeahead(null, {
		  name: 'search', 
		  highlight: true,
		  displayKey: 'name',
		  source: search.ttAdapter(),
		  templates: {
		  	suggestion: Handlebars.compile(
		  		[

	'<p class="text-left">',
		'{{#if image}}<img width="20px" src="{{image}}">{{/if}}',
		'<strong>{{searchSymbol}}{{name}}</strong>',
		'{{#if likes_total}} <span class="glyphicon glyphicon-heart pull-right"></span>{{likes_total}}{{/if}}',
		'{{#if comments_total}} <span class="glyphicon glyphicon-comment pull-right"></span>{{comments_total}}{{/if}}',
	'</p>'

		  		].join('\n'))
		  }
		});

		//EVENTS
		$('.search-wrapper input').bind('typeahead:selected', function(obj, data) {   
			var type = _this.get('searchType');
			var store = _this.container.lookup('store:main'); 



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



			}else if( type === "user" ){
				_this.sendAction('goToRoute', 'profile', data.username);
			}else{
				_this.sendAction('goToRoute', 'search', {queryParams: {type:type, q:data.name}});	
			}
		    
		});

		this.changeSearchType('tag');
	},

	changeSearchType: function(arg) {
		this.set('searchType', arg); 
		this.set('searchSymbol', this.get('searchSymbols')[arg]);
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