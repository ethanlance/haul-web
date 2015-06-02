import Ember from 'ember';
export default Ember.Component.extend({

	limit: 3,

	tag: null,

	postBinding: 'post',

	didInsertElement: function() {

		var store = this.container.lookup('store:main');

		//Add one to the limit because one of the search results
		//may be the same post we are currenlty on, which this 
		//method will ignore.  This way we'll be able to return 
		//enough.
		var limit = this.get('limit') + 1;

		//Tag's can be supplied to the component via the html.
		//or we can use the post body to find tags.
		var tag = this.get('tag');
		if( !tag ) {

			if(!this.get('post')){ return; }

			//Parse the body of the post for tags.
			var body = this.get('post.body');

			tag = this.findHashTags( body );
		}
		if( Ember.isEmpty(tag)){ return; }


		var _this = this;
		store.find('search-tag', {q:tag, limit:limit})
		.then(function(results){

			var posts = [];

			results.forEach(function(record){
				if( record.id !== _this.get('post.id') ) {
					posts.push(record);
				}
			});

			posts = posts.slice(0,limit-1);

			_this.set('posts', posts);
		});

	}.observes('post.id'),


	findHashTags: function(body) {

		var tmp = document.createElement("DIV");
   		tmp.innerHTML = body;
   		body = tmp.textContent || tmp.innerText || "";
		
		var words = body.split(" ");
		var match,hashtag;
		var wordHash = [];
		words.forEach(function(word){
			
			//HASHTAGS
			match = word.match(/^\#.*[^\s]$|^[^\#].*,$/);
			if( match) {
				hashtag = word.split('#')[1];
		  		if( hashtag !== 'undefined' && hashtag !== undefined ){
				   word = hashtag;
		  		}
		  		wordHash.push(word);
			}

			
		});

		//Turn the tags into a string.
		var tags = wordHash.join(',');

		return tags;
	}


});