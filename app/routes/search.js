import Ember from 'ember';
export default Ember.Route.extend( {
	model: function(params) { 
		var _this = this; 
		
		console.log('search params', params);
		if( params.type === "tag" ){
			return this.store.find('search-tag', {q:params.q});	
		}else if( params.type === "product" ){
			return this.store.find('search-post', {q:params.q});	
		}else if( params.type === "user" ){
			return this.store.find('search-user', {q:params.q});	
		}else{
			return ;
		}
	}
});