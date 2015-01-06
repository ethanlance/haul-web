import Ember from 'ember';
var $ = Ember.$;
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var app = Ember.Application.extend({ 
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver
});

loadInitializers(app, config.modulePrefix);

export default app;

