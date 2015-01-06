// app/initializers/authentication.js
import HaulAuthenticator from '../authenticators/application'; 

export default {
	name:   'authentication',
	before: 'simple-auth',
  
	initialize: function(container, application) {
		container.register('authenticator:custom', HaulAuthenticator);
	}
};

// export default  {
//   name: "authentication",
//   before: 'simple-auth',
//   after: "store",
 
//   initialize: function(container, application) {
//       // Wait until all of the following promises are resolved
//       application.deferReadiness();

//       container.register('session:custom', App.CustomSession);
//       // register the custom authenticator so the session can find it
//       container.register('authenticator:custom', App.CustomAuthenticator);
 
//       // container.lookup('store:main').find('local-user', 1).then( function(localUser) {

//       //   // Register the `user:current` namespace
//       //   localUser.get('user').then(function(user){

//       //     user.set('accessToken', localUser.get('accessToken'));
//       //     user.set('refreshToken', localUser.get('refreshToken'));

//       //     container.register('user:current', user, {instantiate: false, singleton: true});
   
//       //     // Inject the namespace into controllers and routes
//       //     container.injection('route', 'currentUser', 'user:current');
//       //     container.injection('controller', 'currentUser', 'user:current');
          
//       //     container.injection('adapter', 'currentUser', 'user:current');

//       //     container.register('user:currentId', user.get('id'), {instantiate: false, singleton: true});
//       //     container.injection('adapter', 'currentUserId', 'user:currentId');
   
//       //     // Continue the Application boot process, allowing other Initializers to run
//       //     application.advanceReadiness();

//       //   });
        
//       // }, function(error){
//       application.advanceReadiness();
//       //});
//    }
// };