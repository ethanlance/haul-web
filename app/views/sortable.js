import Ember from 'ember'; 
import SortableItemView from './sortable-item';
/* global $ */

export default Ember.CollectionView.extend({	
	contentBinding: 'controller',
	tagName: 'ul',
	classNames: ["sortable"],
	itemViewClass: SortableItemView, 
 
	didInsertElement: function(){
		this._super();
		var controller = this.get('controller');
		var _this = this;
		//this.set('content', this.get('images'));
		//JQuery sortable component.
		this.$().sortable({
			update: function() {
				var indexes = {};

				$(this).find('.item').each(function(index) {
					indexes[$(this).data('id')] = index;
				});

				//Tell the controller the new sort.
				controller.updateSortOrder(indexes); 
			}
		}).disableSelection();
	}
});