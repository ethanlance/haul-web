import Ember from 'ember';
import config from '../config/environment';

/*global Bloodhound*/
/*global Handlebars*/
/*global $*/

export default Ember.Component.extend({

	limit: config.APP.paginationLimit.typeahead_search,
	toggle: false,
	user: false,
	post: false,
	query: '',
	searchType: 'tag',
	searchSymbol: '#',
	user_tokenBinding: 'session.currentUser.access_token',
	searchSymbols: {
		'tag':'#',
		'user':'@',
		'post':'<span class="glyphicon glyphicon-search"></span>',
	},

	didInsertElement: function() {
		var _this = this;
		
		

		var search = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			remote: {
				url:this.ENV.Server.SEARCH_SERVER_HOST,
				ajax: {
					beforeSend: function(jqXHR) {
               			jqXHR.setRequestHeader('Authorization', 'Bearer ' + _this.user_token);
           			}
       			},
       			
       			//Which api endpoint:
	       		replace: function(url,query){ 
	       			_this.set('query', query);

	       			var type;
	       			if( _this.get('searchType') === "tag"){
	       				type = 'tags';
	       			}else if( _this.get('searchType') === "user"){
	       				type = 'users';
	       			}else if( _this.get('searchType') === "post"){
	       				type = 'posts';
	       			}

	       			url = _this.ENV.Server.SEARCH_SERVER_HOST + '/search/' + type + '?query=' + query+ "&limit=" + _this.get('limit');
	       			return url;
	       		},

	       		//Process the results:
	       		filter: function(response) {
	       			var data = response.data.map(function(result){

	       				var total;
	       				var type = result.type;

	       				//Image:
	       				var image;
	       				if( result.facebook_user_id ) {
	       					image = "https://graph.facebook.com/" + result.facebook_user_id + "/picture?width=20";
	       				}else if( result.image_id) {
	       					image = "http://static.haul.io/images/local/"+result.image_id+"/thumb";
	       				}
 	
	       				if( type === "search_tag") {
	       					var tag_total = result.total;
	       					total = "";
	       					if( tag_total === 1) {
	       						total = "1 post";
	       					}else{
	       						total = tag_total + " post";
	       					}

	       					return { 
	       						name: 	result.name, 
	       						image: 	false, 
	       						total: 	total
	       					};
 
	       				}else if( type === "search_user") {

	       					var follows_total = result.follows_total;
	       					total = "";
	       					if( follows_total === 1) {
	       						total = "1 follower";
	       					}else{
	       						total = follows_total + " followers";
	       					}

	       					return { 
	       						username: result.username,
	       						
	       						name: 	result.name,
	       						image: 	image,
	       						total: 	total,
	       					};
 
	       				}else if( type === "search_post") {

	       					var user_id = result.post_id.split("_")[0];

							total = result.likes_total + ' <span class="glyphicon glyphicon-heart"></span> ' + result.comments_total + ' <span class="glyphicon glyphicon-comment"></span>';

	       					return {
	       						user_id: user_id,
	       						post_id: result.post_id,

	       						name: 	result.subject,
	       						image: 	image,
	       						total: 	total,
	       					};

	       				}

	       				result.searchSymbol = _this.get('searchSymbol');

	       				return result;
	       			});
					
					//Load More Suggestion:
					if( data.length > 0 ) {
						data.push({
							last:true,
							name:_this.get('query'),
						});
					}

	       			return data;
	       		},
		  	}
		});
		
		//Fire it up. 
		search.initialize();
 
		//Setup
		$('.btn-search input').typeahead(null, {
			name: 'search', 
			highlight: true,
			displayKey: 'name',
			source: search.ttAdapter(),
			templates: {
				suggestion: function( s ) {
					console.log("SUGGESTION", s);	
					var str = "";
					if( s.last ) {
		  				str += '<div class="tt-more-results">more results</div>';
		  			} else {
						str += '<div class="tt-dataset-row">';
						if( s.image ){
							str += '<div class="tt-search-image">';
								str += '<img src="'+ s.image +'">';
							str += '</div>';
						}
						str += '<div class="tt-search-result">';
							str += _this.get('searchSymbol') + ' ' + s.name;
						str += '</div>';
						str += '<div class="tt-search-meta">';
							if( s.total ){ 
								str += s.total;
							}
						str += '</div></div>';
					}

					return str;
				}
		  	// 	suggestion: function(s){return Ember.Handlebars.compile([

		  	// 		'{{#if last}}',
		  	// 		'<div class="tt-more-results">more results</div>',
		  	// 		'{{else}}',
					// '<div class="tt-dataset-row">{{#if image}}<div class="tt-search-image">',
					// 	'<img src="{{image}}">',
					// '</div>{{/if}}',
					// '<div class="tt-search-result">',
					// 	'{{searchSymbol}}{{s.name}}',
					// '</div>',
					// '<div class="tt-search-meta">',
					// 	'{{#if total}} {{{total}}}{{/if}}',
					// '</div></div>',

					// '{{/if}}',

		  	// 	].join('\n'))},
			}
		});

		//On click of result.
		$('.btn-search input').bind('typeahead:selected', function(obj, data) {   
			var type = _this.get('searchType');
			var store = _this.container.lookup('store:main'); 
			var qt;
			if( !Ember.isEmpty(data.last) ){

				if( type === "tag" ) {

					qt =  "hashtag_" + data.name;
					_this.sendAction('goToRoute', 'search', {queryParams: {q:qt}});	
					
				} else {

					qt = type + "_" + data.name;
					_this.sendAction('goToRoute', 'search', {queryParams: {q:qt}});	
				}



			//Post Search	
			}else if( type === "post" ){
				store.find('user', data.user_id)	
				.then(function(user){
					_this.set('user', user);
					return store.find('post', data.post_id);
				})
				.then(function(post){
					_this.set('post', post);
					_this.sendAction('goToRoute', 'profile.post', _this.get('user'), post);	
				});


			//User Search
			}else if( type === "user" ){
				_this.sendAction('goToRoute', 'profile', data.username);


			//Hashtag Search
			}else{
				qt = type + "_" + data.name;
				_this.sendAction('goToRoute', 'search', {queryParams: {q:qt}});	
			}
		    
		});

		this.changeSearchType('tag');
	},

	changeSearchType: function(arg) {
		this.set('searchType', arg); 
		this.set('searchSymbol', this.get('searchSymbols')[arg]);
		
		var input = $('input.form-control.tt-query.tt-input');
		var theVal = input.val();
		input.typeahead('val', '');
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