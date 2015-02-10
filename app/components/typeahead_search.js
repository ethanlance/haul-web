import Ember from 'ember';
export default Ember.Component.extend({

	user_tokenBinding: 'session.currentUser.access_token',

	didInsertElement: function() {
		var _this = this;
		var search = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  //prefetch: '../data/films/post_1960.json',
		  remote: {
		  	url:'http://localhost:8087/search/tags?query=%QUERY',
		  	ajax: {
            	beforeSend: function(jqXHR, settings) {
                	var authHeaders;
                	// pull apart jqXHR, set authHeaders to what it should be
               		jqXHR.setRequestHeader('Authorization', 'Bearer ' + _this.user_token);
           		}
       		},
       		filter: function(response) {
       			console.log("RESP", response);
       			return response.data;
       		}
		  }
		});
		 
		search.initialize();
		 
		$('#remote .typeahead').typeahead(null, {
		  name: 'search', 
		  highlight: true,
		  displayKey: 'name',
		  source: search.ttAdapter(),
		  templates: {
		  	suggestion: Handlebars.compile('<p><strong class="hash">#{{name}}</strong> <span class="pull-right">{{total}} posts</span></p>')
		  }
		});
	}
});