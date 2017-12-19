import DS from 'ember-data';  
export default {
  name: 'session-on-adapter',
  after: 'custom-session',
  initialize: function(container, app) {
    app.inject('adapter', 'session', 'simple-auth-session:main');
  }
};