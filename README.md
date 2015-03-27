

# Upgrade EMBER-CLI
https://github.com/ember-cli/ember-cli/releases

npm uninstall -g ember-cli -- Remove old global ember-cli
npm cache clean -- Clear NPM cache
bower cache clean -- Clear Bower cache
npm install -g ember-cli@0.2.1 -- Install new global ember-cli
Project Update

rm -rf node_modules bower_components dist tmp -- Delete temporary development folders.
npm install --save-dev ember-cli@0.2.1 -- Update project's package.json to use latest version.
npm install -- Reinstall NPM dependencies.
bower install -- Reinstall bower dependencies.

npm uninstall --save-dev broccoli-ember-hbs-template-compiler
npm install --save-dev ember-cli-babel
npm install --save-dev ember-cli-htmlbars
npm install --save-dev ember-cli-qunit@0.3.8
npm install --save-dev ember-data@1.0.0-beta.15
bower uninstall --save handlebars
bower install --save ember#1.10.0
bower install --save ember-data#1.0.0-beta.15
bower install --save ember-cli-test-loader#0.1.3
npm install --save-dev ember-cli-dependency-checker@0.0.8
npm install --save-dev ember-cli-app-version@0.3.2
bower install --save ember-resolver















# Haul

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

