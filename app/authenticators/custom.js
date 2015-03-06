import Ember from 'ember';
import DS from 'ember-data';
import Base from 'simple-auth/authenticators/base';
import Configuration from '../config/environment';

/**
  Authenticator that conforms to OAuth 2
  ([RFC 6749](http://tools.ietf.org/html/rfc6749)), specifically the _"Resource
  Owner Password Credentials Grant Type"_.

  This authenticator supports access token refresh (see
  [RFC 6740, section 6](http://tools.ietf.org/html/rfc6749#section-6)).

  _The factory for this authenticator is registered as
  `'simple-auth-authenticator:oauth2-password-grant'` in Ember's
  container._

  @class OAuth2
  @namespace SimpleAuth.Authenticators
  @module simple-auth-oauth2/authenticators/oauth2
  @extends Base
*/
export default Base.extend({
  /**
	Triggered when the authenticator refreshes the access token (see
	[RFC 6740, section 6](http://tools.ietf.org/html/rfc6749#section-6)).

	@event sessionDataUpdated
	@param {Object} data The updated session data
  */

  /**
	The endpoint on the server the authenticator acquires the access token
	from.

	This value can be configured via
	[`SimpleAuth.Configuration.OAuth2#serverTokenEndpoint`](#SimpleAuth-Configuration-OAuth2-serverTokenEndpoint).

	@property serverTokenEndpoint
	@type String
	@default '/token'
  */
	serverTokenEndpoint: '/token',

  /**
	The endpoint on the server the authenticator uses to revoke tokens. Only
	set this if the server actually supports token revokation.

	This value can be configured via
	[`SimpleAuth.Configuration.OAuth2#serverTokenRevocationEndpoint`](#SimpleAuth-Configuration-OAuth2-serverTokenRevocationEndpoint).

	@property serverTokenRevocationEndpoint
	@type String
	@default null
  */
	serverTokenRevocationEndpoint: null,

  /**
	Sets whether the authenticator automatically refreshes access tokens.

	This value can be configured via
	[`SimpleAuth.Configuration.OAuth2#refreshAccessTokens`](#SimpleAuth-Configuration-OAuth2-refreshAccessTokens).

	@property refreshAccessTokens
	@type Boolean
	@default true
  */
	refreshAccessTokens: true,

  /**
	@property _refreshTokenTimeout
	@private
  */
	_refreshTokenTimeout: null,

  /**
	@method init
	@private
  */
	init: function() {
		this.serverTokenEndpoint           	= Configuration['simple-auth'].serverTokenEndpoint;
		this.serverTokenRevocationEndpoint 	= Configuration['simple-auth'].serverTokenRevocationEndpoint;
		this.refreshAccessTokens           	= Configuration['simple-auth'].refreshAccessTokens;
		this.clientId 						= Configuration.APP.Server.CLIENT_ID	
		this.clientToken					= Configuration.APP.Server.CLIENT_TOKEN;
		this.host							= Configuration.APP.Server.USER_SERVER_HOST
	},

	/**
		Restores the session from a set of session properties; __will return a
		resolving promise when there's a non-empty `access_token` in the `data`__
		and a rejecting promise otherwise.

		This method also schedules automatic token refreshing when there are values
		for `refresh_token` and `expires_in` in the `data` and automatic token
		refreshing is not disabled (see
		[`Authenticators.OAuth2#refreshAccessTokens`](#SimpleAuth-Authenticators-OAuth2-refreshAccessTokens)).

		@method restore
		@param {Object} data The data to restore the session from
		@return {Ember.RSVP.Promise} A promise that when it resolves results in the session being authenticated
	*/
	restore: function(data) {
		var _this = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			
			var now = Math.round(new Date().getTime() /1000)

			if (!Ember.isEmpty(data.expires_at) && data.expires_at < now) {
				if (_this.refreshAccessTokens) {
					_this.refreshAccessToken(data.expires_in, data.refresh_token)
					.then(function(data) {
						resolve(data);
					}, reject);
				} else {
					reject();
				}
			} else {
				if (Ember.isEmpty(data.access_token)) {
			  		reject();
				} else {
			  		_this.scheduleAccessTokenRefresh(data.expires_in, data.expires_at, data.refresh_token);
					resolve(data);
				}
			}
		});
	},


	authenticate: function(options) { 

		var _this = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			var data = options.data;

			var ops = {};
			if( options.type ){
				ops.type = options.type;
			}

			_this.makeRequest(options.host + options.url, data, ops).then(function(response) {
				Ember.run(function() {

					var user_id = response.data[0].user_id;
					var access_token = response.data[0].token_id;
					var refresh_token = response.data[1].token_id; 
					var expiresAt = response.data[0].expiration;

					var data = {access_token:access_token, refresh_token:refresh_token, user_id: user_id};

					var expires_in = _this.timeExpiresIn(expiresAt);

					_this.scheduleAccessTokenRefresh(expires_in, expiresAt, refresh_token);

					if (!Ember.isEmpty(expiresAt)) {
						data.expires_in = expires_in;
						data.expires_at = expiresAt;
					}

					resolve(data);
					
				});
			}, function(xhr, status, error) {
				Ember.run(function() {
					return reject(xhr.responseJSON || xhr.responseText);
				});
			});
		});
	},

	/**
		Cancels any outstanding automatic token refreshes and returns a resolving
		promise.

		@method invalidate
		@param {Object} data The data of the session to be invalidated
		@return {Ember.RSVP.Promise} A resolving promise
	*/
	invalidate: function(data, tryRefresh) {

		var _this = this;
		function success(resolve) {
			Ember.run.cancel(_this._refreshTokenTimeout);
			delete _this._refreshTokenTimeout;
			resolve();
		}
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (!Ember.isEmpty(_this.serverTokenRevocationEndpoint)) {
				var requests = [];
				Ember.A(['access_token', 'refresh_token']).forEach(function(tokenType) {
					if (!Ember.isEmpty(data[tokenType])) {
						requests.push(_this.makeRequest(_this.serverTokenRevocationEndpoint, {
							token_type_hint: tokenType, token: data[tokenType]
						}));
					}
				});
				Ember.$.when.apply(Ember.$, requests).always(function(responses) {
					success(resolve);
				});
	
			} else {
				success(resolve);
	  		}
		});
	},

	  /**
		Sends an `AJAX` request to the `url`. This will always be a _"POST"_
		request with content type _"application/x-www-form-urlencoded"_ as
		specified in [RFC 6749](http://tools.ietf.org/html/rfc6749).

		This method is not meant to be used directly but serves as an extension
		point to e.g. add _"Client Credentials"_ (see
		[RFC 6749, section 2.3](http://tools.ietf.org/html/rfc6749#section-2.3)).

		@method makeRequest
		@param {Object} url The url to send the request to
		@param {Object} data The data to send with the request, e.g. username and password or the refresh token
		@return {Deferred object} A Deferred object (see [the jQuery docs](http://api.jquery.com/category/deferred-object/)) that is compatible to Ember.RSVP.Promise; will resolve if the request succeeds, reject otherwise
		@protected
	  */
	makeRequest: function(url, data, options) {

		var bearer = options.bearer;
		if( Ember.isEmpty(bearer) ) {
			bearer = this.get('clientToken');
		}

		var type = options.type
		if( Ember.isEmpty(type) ) {
			type = 'POST';
		}

		return Ember.$.ajax({
			url:         url,
			type:        type,
			data:        data,
			dataType:    'json',
			contentType: 'application/x-www-form-urlencoded',
			headers: {
				Authorization: 'Bearer ' + bearer
			},
		});
  	},

  /**
	@method scheduleAccessTokenRefresh
	@private
  */
	scheduleAccessTokenRefresh: function(expiresIn, expiresAt, refreshToken) {
		var _this = this;

		if (this.refreshAccessTokens) {
			var now = (new Date()).getTime();
			if (Ember.isEmpty(expiresAt) && !Ember.isEmpty(expiresIn)) {
				expiresAt = new Date(now + expiresIn * 1000).getTime();
			}
			var offset = (Math.floor(Math.random() * 5) + 5) * 1000;

			if (!Ember.isEmpty(refreshToken) && !Ember.isEmpty(expiresAt) && expiresAt > now - offset) {
				Ember.run.cancel(this._refreshTokenTimeout);
				delete this._refreshTokenTimeout;
				if (!Ember.testing) {
					this._refreshTokenTimeout = Ember.run.later(this, this.refreshAccessToken, expiresIn, refreshToken, expiresAt - now - offset);
				}
			}
		}
	},

  /**
	@method refreshAccessToken
	@private
  */
	alreadyRefreshingAccessToken: false,
	refreshAccessToken: function(expiresIn, refreshToken) {
	
		if( this.get('alreadyRefreshingAccessToken') ){
			return;
		}

		this.set('alreadyRefreshingAccessToken', true);

		var _this = this;
		var data  = { client_id: this.get('clientId') };
		return new Ember.RSVP.Promise(function(resolve, reject) {
			_this.makeRequest(_this.host + "/auth/refresh", data, {bearer:refreshToken}).then(function(response) {
				Ember.run(function() {
		
					var user_id = response.data[0].user_id;
					var access_token = response.data[0].token_id;
					var refresh_token = response.data[1].token_id; 
					var expiresAt = response.data[0].expiration;

					if( !expiresIn ){
						var expires_in = _this.timeExpiresIn(expiresAt);
					}

					var data = {
						access_token: access_token, 
						refresh_token:refresh_token, 
						user_id: user_id,
						expires_at: expiresAt,
						expires_in: expires_in
					};

			  		_this.scheduleAccessTokenRefresh(expiresIn, expiresAt, refresh_token);
			  
			  		_this.trigger('sessionDataUpdated', data);

			  		_this.set('alreadyRefreshingAccessToken', false);

					return resolve(data);
				});
			}, function(xhr, status, error) {
				_this.set('alreadyRefreshingAccessToken', false);
				Ember.Logger.warn('Access token could not be refreshed - server responded with ' + error + '.');
				return reject();
	  		});
		});
  },


	timeExpiresIn: function(future_time) {
		if (!Ember.isEmpty(future_time)) {
			var d = future_time - Math.round(new Date().getTime() /1000);
			return d;
		}
	}
});