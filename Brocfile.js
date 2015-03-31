
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	
	//minifyJS:{'enabled':true, options:{'compress':true}}

	emberCliFontAwesome: { includeFontAwesomeAssets: false },
	
	storeConfigInMeta: false,

	fingerprint: {
		prepend: 'https://s3.amazonaws.com/static.haul.io/'
	},

	sourcemaps: ['js'],

	inlineContent: {
		'braintree' : {file: 'public/assets/scripts/braintree.js'},
		'twitter' 	: {file: 'public/assets/scripts/twitter.js'},
		'facebook' 	: {file: 'public/assets/scripts/facebook.js'},
		'pinterest' : {file: 'public/assets/scripts/pinterest.js'}
	}
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/jquery/dist/jquery.js');

app.import('bower_components/underscore/underscore.js'); 

app.import('bower_components/bootstrap/dist/js/bootstrap.js'); 

app.import('bower_components/bootstrap/dist/css/bootstrap.css');

app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
  destDir: 'fonts'
});

app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
  destDir: 'assets'
});

app.import('bower_components/ember/ember-template-compiler.js');

app.import('bower_components/typeahead.js/dist/typeahead.bundle.js'); 

app.import('vendor/jquery.elastic.source.js');

app.import('vendor/jquery.mentionsInput.js');

app.import('vendor/jquery.mentionsInput.css');

app.import('bower_components/jquery-ui/jquery-ui.js');

app.import('bower_components/moment/moment.js');

app.import('bower_components/dropzone/downloads/dropzone.js');

app.import('bower_components/ladda-bootstrap/dist/spin.js');

app.import('bower_components/ladda-bootstrap/dist/ladda.js');

app.import('bower_components/ladda-bootstrap/dist/ladda-themeless.css'); 

app.import('vendor/ember-validations.js');

app.import('bower_components/quill/dist/quill.js');

app.import('vendor/quill.css');

app.import("bower_components/font-awesome/css/font-awesome.css");
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });

module.exports = app.toTree();