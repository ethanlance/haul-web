import DS from 'ember-data';  
import ENV from '../config/environment';
export default {
	name:   'meta',
	before: 'environment',
	

	initialize: function(container, application) {
		// helper function to get tag from dom



		var _getTag = function(tagname, property, value) {
			var tags = document.head.getElementsByTagName(tagname),
				tag,
				i;
			for (i = 0; i < tags.length; i++) {
				tag = tags[i];
				if (tag[property] && tag[property] === value) {
					return tag;
				}
			}
		};

		// hold logic and information
		var Meta = Ember.Object.extend(Ember.Evented, {
			application: null,

			// string values
			title: null,
			description: null,

			// dom elements
			_ogTitle: null,
			_description: null,
			_ogDescription: null,

			// defaults
			defaults: {
				title: null,
				description: null
			},

			summary: Ember.computed(function() {
				return '<title>' + this.get('title') + '</title>\n' +
					this.get('_ogTitle').outerHTML + '\n' +
					this.get('_description').outerHTML + '\n' +
					this.get('_ogDescription').outerHTML;
			}).property('_ogTitle', '_ogDescription'),

			// propagate changes to dom elements
			titleChanged: function() {
				document.title = this.get('title');
				this.get('_ogTitle').setAttribute('content', this.get('title'));
				this.notifyPropertyChange('_ogTitle');
			}.observes('title'),

			descriptionChanged: Ember.observer(function() {
				this.get('_description').setAttribute('content', this.get('description'));
				this.get('_ogDescription').setAttribute('content', this.get('description'));
				this.notifyPropertyChange('_ogDescription');
			}, 'description'),

			init: function() {
				this._super();
				this.on('reloadDataFromRoutes', this.reloadDataFromRoutes);
			},

			reloadDataFromRoutes: function() {
				var handlers = this.get('application').Router.router.currentHandlerInfos,
					newTitle,
					newDescription,
					i = handlers.length;
				// walk through handlers until we have title and description
				// take the first ones that are not empty
				while (i--) {
					var handler = handlers[i].handler;
					if (!newTitle) {
						newTitle = Ember.get(handler, 'metaTitle');
					}
					if (!newDescription) {
						newDescription = Ember.get(handler, 'metaDescription');
					}
				}
				// save changes or snap back to defaults
				if (newTitle) {
					this.set('title', newTitle);
				} else if (this.get('defaults.title')) {
					this.set('title', this.get('defaults.title'));
				}
				if (newDescription) {
					this.set('description', newDescription);
				} else if (this.get('defaults.description')) {
					this.set('description', this.get('defaults.description'));
				}
				this.trigger('didReloadDataFromRoutes');
			}
		});
		var meta = Meta.create({application: application});

		meta.set('defaults.title', document.title);

		// setup meta object
		// are there any tags present yet? if not, create them
		// ogTitle
		var _ogTitle = _getTag('meta', 'property', 'og:title');
		if (!_ogTitle) {
			_ogTitle = document.createElement('meta');
			_ogTitle.setAttribute('property', 'og:title');
			document.head.appendChild(_ogTitle);
		}
		meta.set('_ogTitle', _ogTitle);

		// description
		var _description = _getTag('meta', 'name', 'description');
		if (!_description) {
			_description = document.createElement('meta');
			_description.setAttribute('name', 'description');
			document.head.appendChild(_description);
		} else {
			meta.set('defaults.description', _description.content);
		}
		meta.set('_description', _description);

		// ogDescription
		var _ogDescription = _getTag('meta', 'property', 'og:description');
		if (!_ogDescription) {
			_ogDescription = document.createElement('meta');
			_ogDescription.setAttribute('property', 'og:description');
			document.head.appendChild(_ogDescription);
		} else {
			meta.set('defaults.description', _ogDescription.content);
		}
		meta.set('_ogDescription', _ogDescription);

		// save object to app
		application.set('meta', meta);






		application.register('metadata:main', meta, { instantiate: false });
		application.inject('router', 'meta', 'metadata:main');



	}
};