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
       				url = '/search/products?query=' + query;
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
		  				'{{#if total}} <span class="pull-right">{{total}} posts</span>{{/if}}',
		  			'</p>'

		  		].join('\n'))
		  }
		});

		//EVENTS
		$('.search-wrapper input').bind('typeahead:selected', function(obj, datum) {   
			var type = _this.get('searchType');

			if( type === "user" ){
				_this.sendAction('goToRoute', 'seller', datum.name);
			}else{
				_this.sendAction('goToRoute', 'search', {queryParams: {type:type, q:datum.name}});	
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