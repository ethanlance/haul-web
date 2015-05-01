import Ember from 'ember';
export default Ember.Component.extend({
	didInsertElement: function() {
		var items = Ember.$('.list-group-item');
		var item;
		if(!Ember.isEmpty(items)){
			for(var i=0; i<items.length; i++){
				item = items[i];
				$(item).on('click', function(){
					$('#nav-trigger').prop('checked', false);
				})
			}
		}
	}
});