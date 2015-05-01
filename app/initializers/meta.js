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
			
			_ogitename: null,
			_ogimage: null,
			_fbappid: null,
			_ogurl: null,

			// defaults
			defaults: {
				title: null,
				description: null,
				ogurl: null,
				ogsitename: null,
				ogimage: null,
				fbappid: null
			},

			summary: Ember.computed(function() {
				return '<title>' + this.get('title') + '</title>\n' +
					this.get('_ogTitle').outerHTML + '\n' +
					this.get('_description').outerHTML + '\n' +
					this.get('_ogDescription').outerHTML + '\n' +
					this.get('_ogsitename').outerHTML + '\n' +
					this.get('_ogimage').outerHTML + '\n' +
					this.get('_fbappid').outerHTML + '\n' +
					this.get('_ogurl').outerHTML;

			}).property('_ogTitle', '_ogDescription', '_ogsitename', '_ogurl', '_ogimage', '_fbappid'),

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



			urlChanged: Ember.observer(function() {
				this.get('_ogurl').setAttribute('content', this.get('ogurl'));
				this.notifyPropertyChange('_ogUrl');
			}, 'ogurl'),

			fbidChanged: Ember.observer(function() {
				this.get('_fbappid').setAttribute('content', this.get('fbappid'));
				this.notifyPropertyChange('_fbappid');
			}, 'fbappid'),

			sitenameChanged: Ember.observer(function() {
				this.get('_ogsitename').setAttribute('content', this.get('ogsitename'));
				this.notifyPropertyChange('_ogsitename');
			}, 'ogsitename'),

			imageChanged: Ember.observer(function() {
				this.get('_ogimage').setAttribute('content', this.get('ogimage'));
				this.notifyPropertyChange('_ogImage');
			}, 'ogimage'),


			init: function() {
				this._super();
				this.on('reloadDataFromRoutes', this.reloadDataFromRoutes);
			},

			reloadDataFromRoutes: function() {
				var handlers = this.get('application').Router.router.currentHandlerInfos,
					newTitle,
					newDescription,
					newOgimage,
					newOgurl,
					newOgsitename,
					newOgfbid,
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


				
					if (!newOgimage) {
						newOgimage = Ember.get(handler, 'metaOgImage');
					}
 
					if (!newOgurl) {
						newOgurl = Ember.get(handler, 'metaOgUrl');
					}

				
					if (!newOgsitename) {
						newOgsitename = Ember.get(handler, 'metaOgSitename');
					}

				
					if (!newOgfbid) {
						newOgfbid = Ember.get(handler, 'metaFBAPPID');
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

				if (newOgimage) {
					this.set('ogimage', newOgimage);
				} else if (this.get('defaults.ogimage')) {
					this.set('ogimage', this.get('defaults.ogimage'));
				}
				if (newOgsitename) {
					this.set('ogsitename', newOgsitename);
				} else if (this.get('defaults.ogsitename')) {
					this.set('ogsitename', this.get('defaults.ogsitename'));
				}
				if (newOgurl) {
					this.set('ogurl', newOgurl);
				} else if (this.get('defaults.ogurl')) {
					this.set('ogurl', this.get('defaults.ogurl'));
				}
				if (newOgfbid) {
					this.set('fbappid', newOgfbid);
				} else if (this.get('defaults.fbappid')) {
					this.set('fbappid', this.get('defaults.fbappid'));
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



		var og, ogName, metaTagName;

		ogName = "_ogimage";
		metaTagName = "og:image";
		og = _getTag('meta', 'property', metaTagName);
		if (!og) {
			og = document.createElement('meta');
			og.setAttribute('property', metaTagName);
			document.head.appendChild(og);
		} else {
			meta.set('defaults.ogimage', og.content);
		}
		meta.set(ogName, og);


		ogName = "_ogurl";
		metaTagName = "og:url";
		og = _getTag('meta', 'property', metaTagName);
		if (!og) {
			og = document.createElement('meta');
			og.setAttribute('property', metaTagName);
			document.head.appendChild(og);
		} else {
			meta.set('defaults.ogurl', og.content);
		}
		meta.set(ogName, og);



		ogName = "_ogsitename";
		metaTagName = "og:sitename";
		og = _getTag('meta', 'property', metaTagName);
		if (!og) {
			og = document.createElement('meta');
			og.setAttribute('property', metaTagName);
			document.head.appendChild(og);
		} else {
			meta.set('defaults.ogsitename', og.content);
		}
		meta.set(ogName, og);


		ogName = "_fbappid";
		metaTagName = "fb:app_id";
		og = _getTag('meta', 'property', metaTagName);
		if (!og) {
			og = document.createElement('meta');
			og.setAttribute('property', metaTagName);
			document.head.appendChild(og);
		} else {
			meta.set('defaults.fbappid', og.content);
		}
		meta.set(ogName, og);



		// save object to app
		application.set('meta', meta);






		application.register('metadata:main', meta, { instantiate: false });
		application.inject('router', 'meta', 'metadata:main');



	}
};