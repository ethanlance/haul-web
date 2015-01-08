import Ember from 'ember';
//var $ = Ember.$;
import SortableItemView from './sortable-item';

export default Ember.CollectionView.extend({	
	contentBinding: 'controller',
	tagName: 'ul',
	classNames: ["sortable"],
	itemViewClass: SortableItemView, 
 
	didInsertElement: function(){
		this._super();
		var controller = this.get('controller');
		console.log("CONTROLLER", controller);

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