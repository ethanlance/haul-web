Ember.TEMPLATES['403'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container  content-fixed-nav\">\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops you cannot access that page.</h1>\n		</div>\n	</div>\n</div>");
  
});Ember.TEMPLATES['404'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container content-fixed-nav\">\n	<div class=\"row	\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops we can't find that page.</h1>\n		</div>\n	</div>\n</div>");
  
});Ember.TEMPLATES['account'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "outlet", "header", options))));
  data.buffer.push("\n\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "outlet", "footer", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bs-tooltip-box", options) : helperMissing.call(depth0, "outlet", "bs-tooltip-box", options))));
  return buffer;
  
});Ember.TEMPLATES['homepage'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("\n\n\n<div class=\"container content-fixed-nav home padding-bottom\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <h1 class=\"haul-font\">\n                Our Featured Stores of the Week\n                <br/><small>Communities & Stuff We Love</small>\n            </h1> \n\n\n            <div class=\"container\">\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/dfcc3e70-6aef-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">Super7 Club \n                            <span class=\"small text-regular\">(35 new items)</span>\n                        </div> \n                    </div>\n                    <div class=\"description\">\n                    \n                        We're a community of vintage-style\n                        Japanese clothing...\n                    \n                   </div>\n                </div>\n\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/6a0a9ae0-6af1-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">Twisted Sifter \n                            <span class=\"small text-regular\">(7 new items)</span>\n                        </div>   \n                    </div>\n                    <div class=\"description\"> \n                            Twisted Sifter is the place for finding art, prints... \n                   </div>\n                </div>\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/f219bb40-6af2-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">JDM Rats \n                            <span class=\"small text-regular\">(19 new items)</span>\n                        </div>   \n                    </div>\n                    <div class=\"description\"> \n                            The largest JDM community of parts and cars for sale... \n                   </div>\n                </div>\n\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/2d55a6f0-6af4-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">We 8> Modcloth\n                            <span class=\"small text-regular\">(14 new items)</span>\n                        </div>   \n                    </div>\n                    <div class=\"description\"> \n                            We help you re-sell your outfits, so you can buy more... \n                   </div>\n                </div>\n\n                <div class=\"clearfix\"></div>\n            \n            </div>\n\n        </div>\n    </div>\n\n\n    <div class=\"row padding-top padding-bottom\">\n        <div class=\"col-md-12 haul-font\">\n            <h2>New &amp; Hot For Sale</h2>\n\n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/64b83d20-6b02-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$225\n                    </div>   \n                </div> \n            </div>         \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/3cd70310-6b05-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$80\n                    </div>   \n                </div> \n            </div>    \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/34669710-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$300\n                    </div>   \n                </div> \n            </div> \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/709c4180-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$1300\n                    </div>   \n                </div> \n            </div> \n\n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/a79ff730-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$725\n                    </div>   \n                </div> \n            </div> \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/e7681730-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$1550\n                    </div>   \n                </div> \n            </div> \n\n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/1bdce4a0-6b04-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$20\n                    </div>   \n                </div> \n            </div>             \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/01b14200-6b05-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$30\n                    </div>   \n                </div> \n            </div>    \n        </div>\n    </div>\n\n    <div class=\"row padding-top well haul-font\">\n        <h2 class=\"haul-font\">Community Collectionplaces</h2>\n\n        <div class=\"col-md-4\">\n            <h3>Who Can Sell?</h3>\n            <p>You can.  Anyone can. More...</p>\n\n            <h3>Who Can Buy?</h3>\n            <p>You can! More...</p>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>What's a Haul Store?</h3>\n            <p>\n                Add any item from Haul to your store.  \n                The item does not have to be yours.  \n            </p>\n\n            <p>It's like Pinterest meets eBay, \n                but you earn a commission if the item sells from your store. More...</p>\n\n            </p>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>Stores Are Perfect For</h3>\n            <ul>\n                <li>Community Managers</li>\n                <li>Bloggers</li>\n                <li>Tastemakers</li>\n                <li>Curators</li> \n                <li>Clubs</li>\n            </ul>\n        </div>\n    </div>\n\n\n    <div class=\"row padding-top\">\n        <div class=\"col-md-12 well\">\n        <h2 class=\"haul-font\">Trending Categories</h2>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"list-group\"> \n                  <a href=\"#\" class=\"list-group-item\">Fashion</a>\n                  <a href=\"#\" class=\"list-group-item\">Art</a>\n                  <a href=\"#\" class=\"list-group-item\">Fashion</a>\n                  <a href=\"#\" class=\"list-group-item\">Crafts</a>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"list-group\"> \n                  <a href=\"#\" class=\"list-group-item\">Motors</a>\n                  <a href=\"#\" class=\"list-group-item\">Tech Gear, Cameras</a>\n                  <a href=\"#\" class=\"list-group-item\">Collectibles</a>\n                  <a href=\"#\" class=\"list-group-item\">More...</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n\n\n\n	<div class=\"row\">\n	 	<div class=\"col-md-8\">\n	    	<h1>Messages</h1>\n	    </div>\n	    <div class=\"col-md-4 text-right \">\n	    \n\n		    \n		</div>\n	</div>\n\n\n\n	<div class=\"row\">\n	    \n	    \n	</div>\n</div>");
  
});Ember.TEMPLATES['search'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n\n\n\n	<div class=\"row\">\n	 	<div class=\"col-md-12\">\n	    	<h1>Search</h1>\n	    </div> \n	</div>\n\n\n\n	<div class=\"row\">\n	    \n	    \n	</div>\n</div>");
  
});Ember.TEMPLATES['403'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container  content-fixed-nav\">\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops you cannot access that page.</h1>\n		</div>\n	</div>\n</div>");
  
});Ember.TEMPLATES['404'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container content-fixed-nav\">\n	<div class=\"row	\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops we can't find that page.</h1>\n		</div>\n	</div>\n</div>");
  
});Ember.TEMPLATES['account'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['account/help'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\">\n	<div class=\"col-md-12\">\n		<h1>Help</h1>\n	</div>	\n</div>");
  
});Ember.TEMPLATES['account/profile'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\">\n	<div class=\"col-md-12\">\n		<h1>Profile</h1>\n	</div>	\n</div>");
  
});Ember.TEMPLATES['account/settings'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\">\n	<div class=\"col-md-12\">\n		<h1>Settings</h1>\n	</div>	\n</div>	");
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "outlet", "header", options))));
  data.buffer.push("\n\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "outlet", "footer", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bs-tooltip-box", options) : helperMissing.call(depth0, "outlet", "bs-tooltip-box", options))));
  return buffer;
  
});Ember.TEMPLATES['auth/auth'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['auth/forgot_password'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n				<h2 class=\"form-signin-heading\">\n					Please check your email inbox.<br/>\n					<small>We sent you instructions to reset your password.</small>\n				</h2>\n\n			");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          	\n\n				<form class=\"form-horizontal\" >\n\n					<div class=\"form-group\">\n						<h2 class=\"form-signin-heading\">\n							Forgot Your Password?<br/>\n							<small>Enter your email below</small>\n						</h2>\n					</div> \n\n\n				");
  stack1 = helpers['if'].call(depth0, "error409", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n				");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   \n\n\n				  	<div class=\"form-group\"> \n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'focus-in': ("focus"),
    'type': ("text"),
    'value': ("email"),
    'class': ("form-control"),
    'placeholder': ("Type your email address")
  },hashTypes:{'focus-in': "STRING",'type': "STRING",'value': "ID",'class': "STRING",'placeholder': "STRING"},hashContexts:{'focus-in': depth0,'type': depth0,'value': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			      	</div> \n\n					<div class=\"form-group\">\n				  		<button class=\"btn btn-primary btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Request</button>\n				  	</div>\n\n				</form> \n			");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n			    	<div class=\"alert\">Oops, that email address was not found.</div>\n			  	");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n			    	<div class=\"alert\">Oh no! Something went wrong.</div>\n			  	");
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n			");
  stack1 = helpers['if'].call(depth0, "emailSent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>");
  return buffer;
  
});Ember.TEMPLATES['auth/forgot_password_confirm'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n				<h2 class=\"form-signin-heading\">\n					Reset Your Password\n				</h2>\n\n			");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            	\n\n				<div class=\"form-group\">\n					<h2 class=\"form-signin-heading\">\n						Change Your Password<br/> \n					</h2>\n				</div> \n				\n				");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n				\n			");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"alert\">Oops, that did not work out.</div>\n				");
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	 			<div class=\"form-group\">	\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("hidden")
  },hashTypes:{'as': "STRING"},hashContexts:{'as': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "ticket_id", options) : helperMissing.call(depth0, "input", "ticket_id", options))));
  data.buffer.push("\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("hidden")
  },hashTypes:{'as': "STRING"},hashContexts:{'as': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user_id", options) : helperMissing.call(depth0, "input", "user_id", options))));
  data.buffer.push("\n					</div> \n		 \n			 		<div class=\"form-group\">	\n			 			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'placeholder': ("New Password")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "password", options) : helperMissing.call(depth0, "input", "password", options))));
  data.buffer.push(" \n					</div>  \n\n					<div class=\"form-group\">\n				  		");
  data.buffer.push(escapeExpression((helper = helpers.submit || (depth0 && depth0.submit),options={hash:{
    'class': ("btn btn-primary btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "submit", options))));
  data.buffer.push("\n				  	</div>\n\n				");
  return buffer;
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n			");
  stack1 = helpers['if'].call(depth0, "emailSent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>");
  return buffer;
  
});Ember.TEMPLATES['auth/login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				  	<div class=\"alert\">Sorry, you need to signup first.<br/>Go to ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signup", options) : helperMissing.call(depth0, "link-to", "signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n				  ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Sign Up");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n				  ");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n				  \n				  ");
  stack1 = helpers['if'].call(depth0, "error409", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n				  	<div class=\"form-group\" >\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("email address")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "email", options) : helperMissing.call(depth0, "input", "email", options))));
  data.buffer.push("\n			      	</div>\n\n			 		<div class=\"form-group\">	\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("password")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "password", options) : helperMissing.call(depth0, "input", "password", options))));
  data.buffer.push("\n					</div> \n\n					<div class=\"form-group\">\n						");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("LOGIN"),
    'btnClasses': ("btn btn-primary btn-block ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessingLogin")
  },hashTypes:{'name': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n				  	</div>\n\n				  	<div class=\"text-right\">\n				  		<span class=\"muted\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "forgotpassword", options) : helperMissing.call(depth0, "link-to", "forgotpassword", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n				  	</div>\n\n				");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n				    <div class=\"alert\">Invalid username or password.</div>\n				  ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n				    <div class=\"alert\">Your email needs to be validated before you can login.</div>\n				  ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Forgot Password?");
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n				<div class=\"form-group\">\n						<h2 class=\"form-signin-heading\">Login</h2>\n				</div>\n\n				  ");
  stack1 = helpers['if'].call(depth0, "error404", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				<div class=\"form-group\"> \n\n					");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("FACEBOOK"),
    'btnClasses': ("btn btn-block btn-facebook ladda-button"),
    'btnClick': ("facebookLogin"),
    'spin': ("isProcessingFacebook")
  },hashTypes:{'name': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n\n			    </div> \n\n\n 				<div class=\"form-group padding-top\">\n					<h4 class=\"form-signin-heading\">or with your <br/>email & password</h4>\n				</div>\n\n				");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>");
  return buffer;
  
});Ember.TEMPLATES['auth/logout'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!-- Header -->\n    <header>\n        <div class=\"container\">\n            <div class=\"form row\">\n            	<div class=\"col-md-4\"></div>\n				<div class=\"col-md-4\">\n            	\n            		<h2 class=\"form-signin-heading\">Logged Out</h2>\n	\n				</div>\n				<div class=\"col-md-4\"></div>\n            </div>\n        </div>\n    </header>");
  
});Ember.TEMPLATES['auth/signup'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n			    	<div class=\"alert\">\n			    		<h2>Oops</h2>\n			    		This email is alread registered.  Want to ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" or ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "forgotpassword", options) : helperMissing.call(depth0, "link-to", "forgotpassword", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("?\n\n			    	</div>\n\n			    ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("login");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("recover your password");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("	\n				  	\n\n\n\n					");
  stack1 = helpers['if'].call(depth0, "emailRegistrationRequested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n\n						<h2 class=\"form-signin-heading\">Please check your email inbox.  We sent you a confirmation email.</h2>\n\n					");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("	\n\n\n						<div class=\"form-group\">\n							<h2 class=\"form-signin-heading\">Signup With</h2>\n						</div>\n\n						<div class=\"form-group\"> \n\n							");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("FACEBOOK"),
    'btnClasses': ("btn btn-block btn-facebook ladda-button"),
    'btnClick': ("facebookSignup"),
    'spin': ("isProcessingFacebook")
  },hashTypes:{'name': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n \n					    </div> \n\n\n\n						<div class=\"form-group padding-top\">\n							<h4 class=\"\">or with email</h4>\n						</div>\n\n\n						");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n	            		");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\n					    	<div class=\"alert\">Oh no! Something went wrong.</div>\n					  	");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n						  ");
  stack1 = helpers['if'].call(depth0, "submitFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n						  	<div class=\"form-group\"> \n					      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("Type your email address")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "email", options) : helperMissing.call(depth0, "input", "email", options))));
  data.buffer.push("\n					      	</div> \n\n							<div class=\"form-group\">\n\n								");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("SIGNUP"),
    'btnClasses': ("btn btn-block btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessingSignup")
  },hashTypes:{'name': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n\n						  	</div>\n						");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("\n						    <div class=\"alert\">Oh no, something went wrong.</div>\n						  ");
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n\n\n\n				");
  stack1 = helpers['if'].call(depth0, "error409", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>\n ");
  return buffer;
  
});Ember.TEMPLATES['auth/signup_confirm'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"alert\">Oops, that did not work out.</div>\n				");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	 			<div class=\"form-group\">	\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("hidden")
  },hashTypes:{'as': "STRING"},hashContexts:{'as': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "ticket_id", options) : helperMissing.call(depth0, "input", "ticket_id", options))));
  data.buffer.push("\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("hidden")
  },hashTypes:{'as': "STRING"},hashContexts:{'as': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user_id", options) : helperMissing.call(depth0, "input", "user_id", options))));
  data.buffer.push("\n					</div> \n		 \n			 		<div class=\"form-group\">	\n			 			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("Password")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "password", options) : helperMissing.call(depth0, "input", "password", options))));
  data.buffer.push(" \n					</div> \n\n\n		 \n			 		<div class=\"form-group\">	\n			 			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("First Name")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "firstname", options) : helperMissing.call(depth0, "input", "firstname", options))));
  data.buffer.push(" \n					</div> \n\n\n		 \n			 		<div class=\"form-group\">	\n			 			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("Last Name")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "lastname", options) : helperMissing.call(depth0, "input", "lastname", options))));
  data.buffer.push(" \n					</div> \n\n\n					<div class=\"form-group\">\n				  		");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Complete Registration"),
    'btnClasses': ("btn btn-primary btn-block ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n				  	</div>\n\n				");
  return buffer;
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n			\n				<div class=\"form-group\">\n					<h2 class=\"form-signin-heading\">Welcome Back</h2>\n					<p>We just need a couple more things!</p>\n				</div>\n				\n\n				");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n 	\n				");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>");
  return buffer;
  
});Ember.TEMPLATES['collection-product/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "model.collection.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" \n				<button class=\"btn btn-default\">\n					Edit Your Post\n					<span class=\"glyphicon glyphicon-plus-sign\"></span>\n				</button> \n			");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n				");
  stack1 = helpers['if'].call(depth0, "model.product.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n					");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.CarouselView", {hash:{
    'contentBinding': ("model.product.images")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n				");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n								");
  data.buffer.push(escapeExpression((helper = helpers['collection-btn'] || (depth0 && depth0['collection-btn']),options={hash:{
    'class': ("display-inline"),
    'currentUser': ("currentUser"),
    'product': ("model.product"),
    'productPage': (true)
  },hashTypes:{'class': "STRING",'currentUser': "ID",'product': "ID",'productPage': "BOOLEAN"},hashContexts:{'class': depth0,'currentUser': depth0,'product': depth0,'productPage': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "collection-btn", options))));
  data.buffer.push("\n							");
  return buffer;
  }

  data.buffer.push("\n\n\n<div class=\"container content-fixed-nav\">\n	<div class=\"row\">\n		<div class=\"col-md-6 col-sm-6 col-xs-12 haul-font\">\n			<h2 class=\"heading haul-font\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['make-icon'] || (depth0 && depth0['make-icon']),options={hash:{
    'icon': ("model.collection.icon"),
    'isSmall': (true),
    'class': ("pull-left")
  },hashTypes:{'icon': "ID",'isSmall': "BOOLEAN",'class': "STRING"},hashContexts:{'icon': depth0,'isSmall': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "make-icon", options))));
  data.buffer.push("\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection", "model.collection", options) : helperMissing.call(depth0, "link-to", "collection", "model.collection", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -\n				");
  stack1 = helpers._triageMustache.call(depth0, "model.product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</h2>\n		</div>  \n		<div class=\"col-md-6 col-sm-6 col-xs-12 haul-font padding-top padding-bottom text-right\">\n\n			");
  stack1 = helpers['if'].call(depth0, "isCollectionOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		</div>\n	</div>\n</div>	\n\n\n<div class=\"container\">\n	<div class=\"row\">\n\n		\n\n		<div class=\"col-md-6 col-sm-12 col-xs-12 padding-bottom\">\n			");
  stack1 = helpers['if'].call(depth0, "model.product", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n\n		\n\n		<div class=\"col-md-6 col-sm-12 col-xs-12\">\n			<div class=\"row\">\n				<div class=\"col-md-12 haul-buy-card\">\n					\n					\n\n\n					<div class=\"row button-bar\"> \n						<div class=\"col-md-12 col-sm-12 col-xs-12\">\n							\n							<div class=\"box-rigid lead haul-price\">$");
  stack1 = helpers._triageMustache.call(depth0, "model.product.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>		\n							\n							\n							<button type=\"button\" class=\"btn btn-primary btn-responsive\">BUY</button>\n\n							\n							");
  data.buffer.push(escapeExpression((helper = helpers['like-btn'] || (depth0 && depth0['like-btn']),options={hash:{
    'class': ("display-inline"),
    'item': ("model.product"),
    'currentUser': ("currentUser")
  },hashTypes:{'class': "STRING",'item': "ID",'currentUser': "ID"},hashContexts:{'class': depth0,'item': depth0,'currentUser': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "like-btn", options))));
  data.buffer.push("\n\n							\n							");
  data.buffer.push(escapeExpression((helper = helpers['comment-btn'] || (depth0 && depth0['comment-btn']),options={hash:{
    'class': ("display-inline"),
    'contextObject': ("model.collection"),
    'itemObject': ("model.product"),
    'currentUser': ("currentUser")
  },hashTypes:{'class': "STRING",'contextObject': "ID",'itemObject': "ID",'currentUser': "ID"},hashContexts:{'class': depth0,'contextObject': depth0,'itemObject': depth0,'currentUser': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "comment-btn", options))));
  data.buffer.push("\n							\n\n							\n							");
  stack1 = helpers.unless.call(depth0, "isCollectionOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n						</div>\n\n					</div>\n\n					");
  data.buffer.push(escapeExpression((helper = helpers['product-details'] || (depth0 && depth0['product-details']),options={hash:{
    'seller': ("model.product.user"),
    'product': ("model.product")
  },hashTypes:{'seller': "ID",'product': "ID"},hashContexts:{'seller': depth0,'product': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "product-details", options))));
  data.buffer.push("\n\n				</div>\n			</div>\n		</div>\n\n\n\n		<div class=\"col-md-6 col-sm-12 col-xs-12\">\n			<div class=\"row\">\n				<div class=\"col-md-12 haul-buy-card\">\n\n					<div class=\"row\">\n						<div class=\"col-md-6\">\n							<span class=\"haul-font\"><strong>");
  stack1 = helpers._triageMustache.call(depth0, "model.collection.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" says:</strong></span>\n						</div>\n					</div>\n					\n					<div class=\"row\">\n						<div class=\"col-md-12\">	\n							\n							");
  data.buffer.push(escapeExpression((helper = helpers.breaklines || (depth0 && depth0.breaklines),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.editorial", options) : helperMissing.call(depth0, "breaklines", "model.editorial", options))));
  data.buffer.push("\n		    			</div>\n		    		</div>\n		    	</div>\n		    </div>\n		</div>\n 	</div>\n\n		\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n			");
  data.buffer.push(escapeExpression((helper = helpers['comment-section'] || (depth0 && depth0['comment-section']),options={hash:{
    'contextObject': ("model.collection"),
    'itemObject': ("model.product"),
    'currentUser': ("currentUser")
  },hashTypes:{'contextObject': "ID",'itemObject': "ID",'currentUser': "ID"},hashContexts:{'contextObject': depth0,'itemObject': depth0,'currentUser': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "comment-section", options))));
  data.buffer.push("\n		</div> \n	</div>\n</div>\n\n<div id=\"deleteModal\" class=\"modal fade bs-example-modal-sm in danger\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">Delete?<br/>This cannot be undone</h4>\n		</div>\n		<div class=\"modal-body\"> \n			<p class=\"text-center\">\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProceed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-danger\">Yes, Delete</button>\n			</p>\n		</div>\n		</div>\n	</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['collection/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection", "model.slug", options) : helperMissing.call(depth0, "link-to", "collection", "model.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("<button class=\"btn btn-default\">Cancel</button>");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "currentUser.id", options) : helperMissing.call(depth0, "link-to", "seller", "currentUser.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	<div class=\"row \">\n		<div class=\"col-md-12 col-sm-12 col-xs-12\">\n			");
  data.buffer.push(escapeExpression((helper = helpers['icon-maker'] || (depth0 && depth0['icon-maker']),options={hash:{
    'item': ("model"),
    'currentUser': ("currentUser")
  },hashTypes:{'item': "ID",'currentUser': "ID"},hashContexts:{'item': depth0,'currentUser': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "icon-maker", options))));
  data.buffer.push("\n		</div>\n	</div>\n	");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n			<label>Collection Name</label>\n			<label class=\"small pull-right text-regular\">(max 50 characters)</label>				\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("Pick a cool name!")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push(" \n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n			<label>About Collection</label>\n			<label class=\"small pull-right text-regular\">(max 500 characters)</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text"),
    'canShowValidationError': ("showErrors"),
    'placeholder': ("What makes your collection special?")
  },hashTypes:{'as': "STRING",'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'as': depth0,'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "input", "description", options))));
  data.buffer.push("\n		</div> \n	</div>\n\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n		");
  stack1 = helpers['if'].call(depth0, "errorShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		</div>\n	</div>\n	");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n			");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("errorMessage"),
    'type': ("danger")
  },hashTypes:{'message': "ID",'type': "STRING"},hashContexts:{'message': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n		");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12\">\n			<h3>Order The Items</h3>\n			\n\n			");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.SortableProductView", {hash:{
    'contentBinding': ("products")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n		 \n		</div>\n	</div>\n	");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers['seller-nav'] || (depth0 && depth0['seller-nav']),options={hash:{
    'user': ("currentUser.user"),
    'currentUser': ("currentUser"),
    'isProfileOwner': (true),
    'pageCreateCollections': (true)
  },hashTypes:{'user': "ID",'currentUser': "ID",'isProfileOwner': "BOOLEAN",'pageCreateCollections': "BOOLEAN"},hashContexts:{'user': depth0,'currentUser': depth0,'isProfileOwner': depth0,'pageCreateCollections': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "seller-nav", options))));
  data.buffer.push("\n\n\n\n\n<div class=\"toolbar\">\n	<div class=\"text-right\">\n		\n		");
  stack1 = helpers['if'].call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Save"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n	</div>\n</div>\n\n\n<div class=\"container \">\n\n	<div class=\"row\">\n		<div class=\"col-md-6 col-sm-6 col-xs-6 vcenter\">\n			<h3>Collection</h3> \n		</div>\n	</div>\n\n	\n	");
  stack1 = helpers['if'].call(depth0, "model.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n	\n	");
  stack1 = helpers['if'].call(depth0, "products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['collection/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "collection.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("by ");
  stack1 = helpers._triageMustache.call(depth0, "collection.user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			<div class=\"btn-group\" role=\"group\">\n\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection.edit", "collection", options) : helperMissing.call(depth0, "link-to", "collection.edit", "collection", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n			");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n				<button class=\"btn btn-default\">\n					Edit Collection\n					<span class=\"glyphicon glyphicon-plus-sign\"></span>\n				</button>\n				");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    \n    	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection-product", "product_id", options) : helperMissing.call(depth0, "link-to", "collection-product", "product_id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n    \n	");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	<div class=\"haul-grid-li\"> \n\n				<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n				");
  stack1 = helpers['if'].call(depth0, "sold", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n				<div class=\"info\">		\n			 	  	<div class=\"price\"> $");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>   \n				</div>\n\n				\n			\n	 	</div>\n	 	");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"sold\">Sold</div>\n				");
  }

  data.buffer.push("\n\n<div class=\"container content-fixed-nav\">\n	<div class=\"row\">\n		<div class=\"col-md-6 col-sm-12 col-xs-12 haul-font\">\n			<div class=\"media\">\n				\n				");
  data.buffer.push(escapeExpression((helper = helpers['profile-badge'] || (depth0 && depth0['profile-badge']),options={hash:{
    'item': ("collection"),
    'isCollectionOwner': ("isCollectionOwner")
  },hashTypes:{'item': "ID",'isCollectionOwner': "ID"},hashContexts:{'item': depth0,'isCollectionOwner': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "profile-badge", options))));
  data.buffer.push("\n\n				<div class=\"media-body\">\n			     	<h2 class=\"heading haul-font\">\n			     		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection", "collection", options) : helperMissing.call(depth0, "link-to", "collection", "collection", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			     	</h2>\n\n			     	");
  data.buffer.push(escapeExpression((helper = helpers['truncate-text'] || (depth0 && depth0['truncate-text']),options={hash:{
    'text': ("collection.description")
  },hashTypes:{'text': "ID"},hashContexts:{'text': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "truncate-text", options))));
  data.buffer.push("\n\n			     	<h5>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "collection.user", options) : helperMissing.call(depth0, "link-to", "seller", "collection.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>\n\n				</div> \n			</div>\n		</div>  \n\n\n		<div class=\"col-md-6 col-sm-12 col-xs-12 haul-font padding-top text-right	\">\n			\n\n			");
  stack1 = helpers['if'].call(depth0, "isCollectionOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n		</div>\n\n\n	</div>\n</div>	\n \n\n\n\n<div class=\"container\">\n\n\n\n\n\n	 \n    ");
  stack1 = helpers.each.call(depth0, "products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div> \n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['comments/comments'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("hide comments");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<div class=\"media\">\n		  <a class=\"pull-left\" href=\"#\"> \n		    <div class=\"profile-small-circular-mask\">\n		    	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n			</div>\n		  </a>\n		  <div class=\"media-body\">\n		    <h4 class=\"media-heading\">\n		    	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "products", "user.slug", options) : helperMissing.call(depth0, "link-to", "products", "user.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		    </h4>\n		    ");
  stack1 = helpers._triageMustache.call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		  </div>\n		</div>\n	");
  return buffer;
  }
function program4(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n\n\n\n<div class=\"row\">\n	<div class=\"col-md-12\">\n		<h3>");
  stack1 = helpers._triageMustache.call(depth0, "controllers.product.commentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Comments</h3>\n		<h6>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "controllers.product", options) : helperMissing.call(depth0, "link-to", "product", "controllers.product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n	</div>\n</div>		\n<div class=\"row\">\n	<div class=\"col-md-12\">\n\n	");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n	</div>\n</div>\n<div class=\"row\">\n	<div class=\"col-md-12\">\n		<br/>\n		<h4>Say Something</h4>\n\n		<div class=\"row\">\n			<div class=\"col-md-12\">\n				<textarea class=\"form-control\" rows=\"3\"></textarea>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-12 text-right\"><br/>\n				<button class=\"btn btn-default\">comment</button>\n			</div>\n		</div>\n\n	</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/collection-btn'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n					<div class=\"row\">\n\n						\n						<div class=\"col-md-6 col-sm-6 col-xs-12\">\n						\n							<div class=\"row\">\n								<div class=\"col-md-12 col-sm-12 col-xs-12\">  \n								<h4>Collection</h4>\n\n									");
  data.buffer.push(escapeExpression((helper = helpers['collection-selector'] || (depth0 && depth0['collection-selector']),options={hash:{
    'class': ("display-inline"),
    'currentUser': ("currentUser"),
    'targetObject': ("targetObject"),
    'selectedCollectionId': ("selectedCollectionId"),
    'isShowCreateCollection': ("isShowCreateCollection")
  },hashTypes:{'class': "STRING",'currentUser': "ID",'targetObject': "ID",'selectedCollectionId': "ID",'isShowCreateCollection': "ID"},hashContexts:{'class': depth0,'currentUser': depth0,'targetObject': depth0,'selectedCollectionId': depth0,'isShowCreateCollection': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "collection-selector", options))));
  data.buffer.push("\n \n								</div>\n							</div>\n\n							\n							<div class=\"row\">\n								<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n								\n									<div class=\"media\">\n\n										<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isShowCreateCollection:hide:show")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n											<div class=\"pull-right\">\n												<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showCreateCollection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-fit-select\">\n													<span class=\"glyphicon glyphicon-plus\"></span>\n												</button>\n											</div>\n										</div>\n	 								\n	 									<div class=\"media-body\">\n										");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("userCollections"),
    'optionValuePath': ("content.collection_id"),
    'optionLabelPath': ("content.collection_name"),
    'selectionBinding': ("selectedCollection"),
    'class': ("form-control"),
    'prompt': ("Pick a collection")
  },hashTypes:{'contentBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selectionBinding': "STRING",'class': "STRING",'prompt': "STRING"},hashContexts:{'contentBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selectionBinding': depth0,'class': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n										</div>\n									</div> \n\n								</div> \n							</div> \n						</div>\n\n						\n						<div class=\"col-md-6 col-sm-6 col-xs-12 text-center padding-top\"> \n							<img class=\"thumbnail small center\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("productImage")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n							<p>");
  stack1 = helpers._triageMustache.call(depth0, "model.product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p> \n						</div>\n					</div>\n\n\n							\n							\n					<div class=\"row\">\n						<div class=\"col-md-12 col-sm-12 col-xs-12\">  \n									\n								<h4>Editorial</h4>\n\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text"),
    'canShowValidationError': ("showErrors"),
    'placeholder': ("Tell everyone what's so awesome about this item")
  },hashTypes:{'as': "STRING",'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'as': depth0,'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "editorial", options) : helperMissing.call(depth0, "input", "editorial", options))));
  data.buffer.push(" \n\n						</div> \n					</div>\n\n					<div class=\"row\">\n						<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n						");
  stack1 = helpers['if'].call(depth0, "errorShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n						</div>\n					</div>\n\n					<div class=\"row\">\n						<div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\n\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "curateCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n\n							");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Save"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push(" \n						</div>\n					</div>\n\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("errorMessage"),
    'type': ("danger")
  },hashTypes:{'message': "ID",'type': "STRING"},hashContexts:{'message': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  stack1 = helpers._triageMustache.call(depth0, "model.collection.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>");
  return buffer;
  }

  data.buffer.push("\n\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-responsive haul-font\" \n	");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Haul it! Add to your collection")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n	Add To Collection\n	<span class=\"glyphicon glyphicon-plus\"></span>\n</button>\n\n \n\n\n\n<div id=\"curateModal\" class=\"modal fade in danger text-left\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-lg\">\n		<div class=\"modal-content\">\n\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n				<h4 class=\"modal-title\" id=\"mySmallModalLabel\">\n					Add Your Haul\n				</h4>\n			</div>\n\n			<div class=\"modal-body\"> \n\n				\n\n				<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("showForm:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n					");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n				</div>\n\n\n				\n\n				<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("showSuccessMessage:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n					<div class=\"row\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("styleSuccessMessage:off")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						<div class=\"col-md-6 col-sm-12 col-xs-12\">\n						 	<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("productImage")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n						</div>\n\n						<div class=\"col-md-6 col-sm-12 col-xs-12\">\n \n							<h4>Added to ");
  stack1 = helpers._triageMustache.call(depth0, "model.collection.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<strong>");
  stack1 = helpers._triageMustache.call(depth0, "model.collection.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong><h4>\n\n							<p>Go to ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection", "model.collection", options) : helperMissing.call(depth0, "link-to", "collection", "model.collection", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" or <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">close window</button></p>\n\n						</div>\n					</div>\n				</div>\n\n\n			</div>\n		</div>\n	</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/collection-selector'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isShowCreateCollection:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n	<div class=\"row\"> \n		<div class=\"col-md-12 col-sm-12 col-xs-12\">\n			<div class=\"media\"> \n\n				<div class=\"pull-right\">\n				");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Create"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-default ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n				</div>\n				<div class=\"media-body\">\n					");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors"),
    'placeholder': ("collection title")
  },hashTypes:{'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push("  \n				</div> \n				\n			</div>\n	 	</div>\n	 </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/comment-btn'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollTo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default btn-responsive\" \n	");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Comment on This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "commentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"glyphicon glyphicon-comment\"></span>\n</button>");
  return buffer;
  
});Ember.TEMPLATES['components/comment-section'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n				\n				");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text"),
    'canShowValidationError': ("showErrors"),
    'placeholder': ("Leave a comment.")
  },hashTypes:{'as': "STRING",'canShowValidationError': "ID",'placeholder': "STRING"},hashContexts:{'as': depth0,'canShowValidationError': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "input", "comment", options))));
  data.buffer.push("\n				\n				<div class=\"text-right\">\n					\n					");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Post Comment"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n\n				</div>\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n					<div class=\"media media-divider\">\n						 \n							");
  data.buffer.push(escapeExpression((helper = helpers['make-icon'] || (depth0 && depth0['make-icon']),options={hash:{
    'icon': ("user.icon"),
    'isSmall': (true),
    'class': ("pull-left")
  },hashTypes:{'icon': "ID",'isSmall': "BOOLEAN",'class': "STRING"},hashContexts:{'icon': depth0,'isSmall': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "make-icon", options))));
  data.buffer.push("\n						 \n						<div class=\"media-body\">\n\n							");
  stack1 = helpers['if'].call(depth0, "canDelete", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n							<strong>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n\n							<br/>\n\n							");
  data.buffer.push(escapeExpression((helper = helpers.breaklines || (depth0 && depth0.breaklines),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "breaklines", "comment", options))));
  data.buffer.push(" \n\n							<br/>\n\n							<span class=\"small\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created_at", options) : helperMissing.call(depth0, "format-date", "created_at", options))));
  data.buffer.push("</span>\n\n\n						</div>\n					</div>\n\n				");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n							<div class=\"pull-right\">\n								<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-sm\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n							</div>\n							");
  return buffer;
  }

function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"row padding-top\">\n	<div class=\"col-md-12 haul-buy-card\">\n		\n		\n		<div class=\"row\"  id=\"leaveComment\">\n			<div class=\"col-md-12\">\n			<h4>Comments</h4>\n\n\n			");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n\n\n\n		\n		<div class=\"row\">\n			<div class=\"col-md-12\">\n\n\n				");
  stack1 = helpers.each.call(depth0, "sortedComments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/follow-btn'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "showButton", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"box-rigid\">\n	<span class=\"small\">");
  stack1 = helpers._triageMustache.call(depth0, "isFollowedByText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><br/>\n	<span class=\"small\">");
  stack1 = helpers._triageMustache.call(depth0, "isFollowingText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"box-rigid\">\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "btnClick", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">");
  stack1 = helpers._triageMustache.call(depth0, "btnName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n</div>\n");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "showButton", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<br/><span class=\"small\">");
  stack1 = helpers._triageMustache.call(depth0, "isFollowedByText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "btnClick", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">");
  stack1 = helpers._triageMustache.call(depth0, "btnName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n");
  return buffer;
  }

  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isFollowingText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['components/icon-maker'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"box-rigid\">\n	<div class=\"dropzone-preview\">\n		<div class=\"profile-circular-mask text-center\">\n			<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n		</div>\n	</div>\n</div>\n\n<div class=\"box-rigid\">\n	<div id=\"dropzone\" class=\"box-vert-align\">\n		\n		<button id=\"haul-dropzone-browse\" class=\"btn btn-default\">Change Photo</button>\n		\n		<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":badge :badge-success isSuccess:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >changed</span>\n\n		<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":progress isProgress:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n			<div class=\"progress-bar progress-bar-striped active\" \n				role=\"progressbar\" \n				");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("progressStyle")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n				aria-valuemin=\"0\" \n				aria-valuemax=\"100\" \n				data-dz-uploadprogress>\n			</div>\n		</div>\n\n		<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":alert :alert-danger :alert-sm isFailed:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >");
  stack1 = helpers._triageMustache.call(depth0, "errorMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/image-card'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div class=\"haul-grid-thumbs\"> \n	\n	<div class=\"delete text-right\">\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "imageDelete", "image", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default btn-sm btn-no-radius\">\n			<span class=\"glyphicon glyphicon-trash\"></span>\n		</button>\n	</div>\n\n	<img ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "imageClick", "image", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"thumbnail haul-thumb\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n</div> \n\n\n\n\n\n<div class=\"modal fade bs-example-modal-sm in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("deleteModalStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">Delete Image?<br/>This cannot be undone.</h4>\n		</div>\n		<div class=\"modal-body\"> \n			<p class=\"text-center\">\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "imageDeleteCancel", "image", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "imageDeleteProceed", "image", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-danger\">Yes, Delete</button>\n			</p>\n		</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/image-order'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"sort-item-wrapper\">\n	<img data-id=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.content.data.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"thumbnail haul-thumb item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.content.data.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  draggable=\"true\">\n	<span class=\"glyphicon glyphicon-move\"></span>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/image-picker'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" \n					");
  data.buffer.push(escapeExpression((helper = helpers['image-card'] || (depth0 && depth0['image-card']),options={hash:{
    'image': (""),
    'imageClick': ("imageClick"),
    'imageDeleteProceed': ("imageDeleteProceed")
  },hashTypes:{'image': "ID",'imageClick': "STRING",'imageDeleteProceed': "STRING"},hashContexts:{'image': depth0,'imageClick': depth0,'imageDeleteProceed': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-card", options))));
  data.buffer.push("\n				");
  return buffer;
  }

  data.buffer.push("<div class=\"row \">\n	<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n		<div id='haul-dropzone'>\n			<div><button id=\"haul-dropzone-browse\" class=\"btn btn-default\">Browse Your Photos</button> or drop them in this box, then click photos to select.</div>\n				\n				<div class=\"haul-grid\">\n					<div class=\"dropzone-preview\"></div>\n\n\n						\n				");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				\n			</div>\n			<div style=\"clear: both;\"></div>\n		</div>\n	</div>\n</div>\n \n<div id=\"imagePickerModal\"	class=\"modal fade bs-example-modal-sm in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">5 images max</h4>\n		</div>\n		<div class=\"modal-body\">\n			<p>Hello, you've selected 5 images. That's the maximum images a product can have.</p>\n			<p>Deselect an image or click \"Next Step\".</p>\n		</div>\n		</div>\n	</div>\n</div>\n\n\n\n\n<div class=\"modal fade bs-example-modal-sm in \" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("errorDeleteModalStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content danger\">\n\n		<div class=\"modal-header\">\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">Oh no, an error!</h4>\n		</div>\n		<div class=\"modal-body\"> \n			<p class=\"text-center\">\n				Something went wrong with delete.  \n			</p>\n		</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/ladda-btn'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "btnClick", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("btnClasses")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-style=\"expand-right\"><span class=\"ladda-label\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></button>\n");
  return buffer;
  
});Ember.TEMPLATES['components/like-btn'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<button type=\"button\" class=\"btn btn-default btn-responsive\" \n	");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "btnClick", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Like This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n	");
  stack1 = helpers._triageMustache.call(depth0, "total", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":glyphicon :glyphicon-heart userLikes:red")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n</button>	");
  return buffer;
  
});Ember.TEMPLATES['components/make-icon'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isSmall:sm :profile-circular-mask ")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/product-details'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "seller.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push(" \n \n<div class=\"row\">\n	<div class=\"col-md-3 col-sm-3 col-xs-3\">\n		<div class=\"text-center\">\n			<h4 class=\"haul-font\">Seller:</h4>\n			");
  data.buffer.push(escapeExpression((helper = helpers['make-icon'] || (depth0 && depth0['make-icon']),options={hash:{
    'icon': ("seller.icon"),
    'isSmall': (true)
  },hashTypes:{'icon': "ID",'isSmall': "BOOLEAN"},hashContexts:{'icon': depth0,'isSmall': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "make-icon", options))));
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "seller", options) : helperMissing.call(depth0, "link-to", "seller", "seller", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("			\n		</div>\n	</div>\n		\n	<div class=\"col-md-9 col-sm-9 col-xs-9\">\n		<h4 class=\"haul-font\">Details:</h4>\n		");
  data.buffer.push(escapeExpression((helper = helpers.breaklines || (depth0 && depth0.breaklines),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "product.description", options) : helperMissing.call(depth0, "breaklines", "product.description", options))));
  data.buffer.push("\n	</div>\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/product-order'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"sort-item-wrapper\">\n	<img data-id=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.content.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"thumbnail haul-thumb item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.content.image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  draggable=\"true\">\n	<span class=\"glyphicon glyphicon-move\"></span>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/profile-badge'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-left")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection", "item", options) : helperMissing.call(depth0, "link-to", "collection", "item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("item.icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	");
  stack1 = helpers['if'].call(depth0, "isCollectionOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    	");
  stack1 = helpers['if'].call(depth0, "isPofileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection.edit", "item", options) : helperMissing.call(depth0, "link-to", "collection.edit", "item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    	");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("<span>edit</span>");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    		<span>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    	");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("edit");
  }

  data.buffer.push("<div class=\"box-rigid text-center box-soft\">\n	\n  	<div class=\"profile-circular-mask text-center\">\n  	");
  stack1 = helpers['if'].call(depth0, "item.icon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n\n	");
  data.buffer.push(escapeExpression((helper = helpers['follow-btn'] || (depth0 && depth0['follow-btn']),options={hash:{
    'item': ("item"),
    'currentUser': ("targetObject.currentUser"),
    'targetObject': ("targetObject"),
    'ref_type': ("collection")
  },hashTypes:{'item': "ID",'currentUser': "ID",'targetObject': "ID",'ref_type': "STRING"},hashContexts:{'item': depth0,'currentUser': depth0,'targetObject': depth0,'ref_type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "follow-btn", options))));
  data.buffer.push(" \n	\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/profile-btn'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n	<div class=\"btn-group navbar-profile\">\n	\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickProfile", "currentUser.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default\">\n			");
  stack1 = helpers['if'].call(depth0, "currentUser.icon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			<span class=\"profile-name\">");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n	  		\n		</button>\n\n	  <div class=\"btn-group\">\n	    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n	      <span class=\"glyphicon glyphicon-cog\"></span>\n	    </button>\n	    <ul class=\"dropdown-menu\" role=\"menu\">\n\n	    	<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.products", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.products", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-product", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-product", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-collection", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-collection", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>  \n			\n				\n			<li class=\"divider\"></li> 	\n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n\n			<li class=\"divider\"></li> \n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logout", options) : helperMissing.call(depth0, "link-to", "logout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n	    </ul>\n	  </div>\n	</div> \n\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n				<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentUser.icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n			");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("My Items");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("- Create Item");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("My Collections");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("- Create Collection");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Profile Settings");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("Logout");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n\n	<div class=\"navbar-profile\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signup", options) : helperMissing.call(depth0, "link-to", "signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n\n");
  return buffer;
  }
function program17(depth0,data) {
  
  
  data.buffer.push("<button type=\"button\" class=\"btn btn-default signup\">SIGNUP</button>");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("<button type=\"button\" class=\"btn btn-default\">LOGIN</button>");
  }

  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/seller-nav'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n			    	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n						<span>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n					");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("edit");
  }

function program8(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center padding-top\">\n\n\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-collection", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-collection", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-product", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-product", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		 \n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.products", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.products", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		  \n		</div>\n	</div> \n	");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("pageCollections:selected :btn :btn-default :btn-responsive :haul-font")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n				<span class=\"glyphicon glyphicon-chevron-left\"></span>\n				Collections\n			</button>\n			");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n				<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("pageCreateCollections:selected :btn :btn-default :btn-responsive :haul-font")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n					<span class=\"glyphicon glyphicon-plus-sign\"></span>\n					Collection\n				</button>\n			");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("pageCreateItems:selected :btn :btn-default :btn-responsive :haul-font")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n				Sell \n				<span class=\"glyphicon glyphicon-camera\"></span>\n			</button>\n			");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("pageItems:selected :btn :btn-default :btn-responsive :haul-font")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n				My Items\n				<span class=\"glyphicon glyphicon-chevron-right\"></span>\n			</button>\n			");
  return buffer;
  }

  data.buffer.push("<div class=\"container content-fixed-nav\">\n	<div class=\"row haul-font\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n			<div class=\"media\">\n			  	<div class=\"profile-circular-mask pull-left\">\n			  	");
  stack1 = helpers['if'].call(depth0, "user.icon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			    </div>\n			 \n			 	<div class=\"media-body\">\n			     	<h1 class=\"heading haul-font\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n					<div>\n						");
  data.buffer.push(escapeExpression((helper = helpers['follow-btn'] || (depth0 && depth0['follow-btn']),options={hash:{
    'item': ("user"),
    'ref_type': ("user"),
    'currentUser': ("currentUser")
  },hashTypes:{'item': "ID",'ref_type': "STRING",'currentUser': "ID"},hashContexts:{'item': depth0,'ref_type': depth0,'currentUser': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "follow-btn", options))));
  data.buffer.push(" \n					</div> \n				</div>\n			</div> \n		</div>\n	</div>\n\n\n	\n	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>	");
  return buffer;
  
});Ember.TEMPLATES['components/truncate-text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<p>");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	");
  stack1 = helpers.unless.call(depth0, "isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":row :collapse isOpen:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"description\">\n		<div class=\"col-md-12\">\n			");
  data.buffer.push(escapeExpression((helper = helpers.breaklines || (depth0 && depth0.breaklines),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "text", options) : helperMissing.call(depth0, "breaklines", "text", options))));
  data.buffer.push(" <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" class=\"collapsed\" href=\"#description\">[less]</a>\n		</div>	\n	</div>	\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n			");
  stack1 = helpers._triageMustache.call(depth0, "textTruncated", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "open", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-toggle=\"collapse\" class=\"collapsed\" href=\"#description\">...[+]</a>\n		</div>	\n	</div>	\n	");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "doTruncation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['form-fields/input'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['hint-field'] || (depth0 && depth0['hint-field']),options={hash:{
    'propertyBinding': ("view.property"),
    'textBinding': ("view.hint")
  },hashTypes:{'propertyBinding': "STRING",'textBinding': "STRING"},hashContexts:{'propertyBinding': depth0,'textBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "hint-field", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['error-field'] || (depth0 && depth0['error-field']),options={hash:{
    'propertyBinding': ("view.property")
  },hashTypes:{'propertyBinding': "STRING"},hashContexts:{'propertyBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "error-field", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n<div>\n  ");
  data.buffer.push(escapeExpression((helper = helpers['input-field'] || (depth0 && depth0['input-field']),options={hash:{
    'propertyBinding': ("view.property"),
    'inputOptionsBinding': ("view.inputOptionsValues"),
    'class': ("form-control")
  },hashTypes:{'propertyBinding': "STRING",'inputOptionsBinding': "STRING",'class': "STRING"},hashContexts:{'propertyBinding': depth0,'inputOptionsBinding': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-field", options))));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "view.hint", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "view.showError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['homepage'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("\n\n\n<div class=\"container content-fixed-nav home padding-bottom\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <h1 class=\"haul-font\">\n                Our Featured Stores of the Week\n                <br/><small>Communities & Stuff We Love</small>\n            </h1> \n\n\n            <div class=\"container\">\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/dfcc3e70-6aef-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">Super7 Club \n                            <span class=\"small text-regular\">(35 new items)</span>\n                        </div> \n                    </div>\n                    <div class=\"description\">\n                    \n                        We're a community of vintage-style\n                        Japanese clothing...\n                    \n                   </div>\n                </div>\n\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/6a0a9ae0-6af1-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">Twisted Sifter \n                            <span class=\"small text-regular\">(7 new items)</span>\n                        </div>   \n                    </div>\n                    <div class=\"description\"> \n                            Twisted Sifter is the place for finding art, prints... \n                   </div>\n                </div>\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/f219bb40-6af2-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">JDM Rats \n                            <span class=\"small text-regular\">(19 new items)</span>\n                        </div>   \n                    </div>\n                    <div class=\"description\"> \n                            The largest JDM community of parts and cars for sale... \n                   </div>\n                </div>\n\n\n                <div class=\"haul-grid-li home\"> \n                    <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/2d55a6f0-6af4-11e4-ba33-fbf4d2db086d/small\">\n                    <div class=\"info\">      \n                        <div class=\"price\">We 8> Modcloth\n                            <span class=\"small text-regular\">(14 new items)</span>\n                        </div>   \n                    </div>\n                    <div class=\"description\"> \n                            We help you re-sell your outfits, so you can buy more... \n                   </div>\n                </div>\n\n                <div class=\"clearfix\"></div>\n            \n            </div>\n\n        </div>\n    </div>\n\n\n    <div class=\"row padding-top padding-bottom\">\n        <div class=\"col-md-12 haul-font\">\n            <h2>New &amp; Hot For Sale</h2>\n\n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/64b83d20-6b02-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$225\n                    </div>   \n                </div> \n            </div>         \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/3cd70310-6b05-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$80\n                    </div>   \n                </div> \n            </div>    \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/34669710-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$300\n                    </div>   \n                </div> \n            </div> \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/709c4180-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$1300\n                    </div>   \n                </div> \n            </div> \n\n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/a79ff730-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$725\n                    </div>   \n                </div> \n            </div> \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/e7681730-6b03-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$1550\n                    </div>   \n                </div> \n            </div> \n\n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/1bdce4a0-6b04-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$20\n                    </div>   \n                </div> \n            </div>             \n\n            <div class=\"haul-grid-li home\"> \n                <img class=\"thumbnail\" src=\"http://s3.amazonaws.com/static.haul.io/images/local/01b14200-6b05-11e4-ba33-fbf4d2db086d/small\">\n                <div class=\"info\">      \n                    <div class=\"price\">$30\n                    </div>   \n                </div> \n            </div>    \n        </div>\n    </div>\n\n    <div class=\"row padding-top well haul-font\">\n        <h2 class=\"haul-font\">Community Collectionplaces</h2>\n\n        <div class=\"col-md-4\">\n            <h3>Who Can Sell?</h3>\n            <p>You can.  Anyone can. More...</p>\n\n            <h3>Who Can Buy?</h3>\n            <p>You can! More...</p>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>What's a Haul Store?</h3>\n            <p>\n                Add any item from Haul to your store.  \n                The item does not have to be yours.  \n            </p>\n\n            <p>It's like Pinterest meets eBay, \n                but you earn a commission if the item sells from your store. More...</p>\n\n            </p>\n        </div>\n        <div class=\"col-md-4\">\n            <h3>Stores Are Perfect For</h3>\n            <ul>\n                <li>Community Managers</li>\n                <li>Bloggers</li>\n                <li>Tastemakers</li>\n                <li>Curators</li> \n                <li>Clubs</li>\n            </ul>\n        </div>\n    </div>\n\n\n    <div class=\"row padding-top\">\n        <div class=\"col-md-12 well\">\n        <h2 class=\"haul-font\">Trending Categories</h2>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"list-group\"> \n                  <a href=\"#\" class=\"list-group-item\">Fashion</a>\n                  <a href=\"#\" class=\"list-group-item\">Art</a>\n                  <a href=\"#\" class=\"list-group-item\">Fashion</a>\n                  <a href=\"#\" class=\"list-group-item\">Crafts</a>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"list-group\"> \n                  <a href=\"#\" class=\"list-group-item\">Motors</a>\n                  <a href=\"#\" class=\"list-group-item\">Tech Gear, Cameras</a>\n                  <a href=\"#\" class=\"list-group-item\">Collectibles</a>\n                  <a href=\"#\" class=\"list-group-item\">More...</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['layouts/header_anon'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Haul");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Sign Up");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  data.buffer.push("\n    <!-- AGENCY -->\n    <link href=\"/static/css/agency/agency.css\" rel=\"stylesheet\">\n    <link href=\"/static/css/agency/agency_anon.css\" rel=\"stylesheet\">\n    \n\n    <!-- Custom Fonts -->\n    <link href=\"font-awesome-4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n    <link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\n    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\n\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-anon\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a href=\"#page-top\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden\">\n                    <a href=\"#page-top\"></a>\n                </li>\n                <li>\n                    <a class=\"page-scroll\" href=\"/#how\">How It Works</a>\n                </li>\n                \n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signup", options) : helperMissing.call(depth0, "link-to", "signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n  \n\n  \n\n  \n  \n    ");
  return buffer;
  
});Ember.TEMPLATES['layouts/header_base'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Haul");
  }

  data.buffer.push("\n<div class=\"navbar navbar-default navbar-fixed-top haul-navbar\" role=\"navigation\">\n	\n	<div class=\"navbar-header\">\n		<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n			<span class=\"sr-only\">Toggle navigation</span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n		</button>\n				\n		<div class=\"logo-outer\">\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n\n		<div class=\"navbar-right\">\n\n			");
  data.buffer.push(escapeExpression((helper = helpers['profile-btn'] || (depth0 && depth0['profile-btn']),options={hash:{
    'currentUser': ("controllers.auth.currentUser"),
    'clickTransition': ("clickTransition")
  },hashTypes:{'currentUser': "ID",'clickTransition': "STRING"},hashContexts:{'currentUser': depth0,'clickTransition': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "profile-btn", options))));
  data.buffer.push("\n		 \n		</div> 	\n	</div>\n\n 	<div class=\"navbar-center navbar-collapse collapse\">\n		<form class=\"\" role=\"search\">\n			<div class=\"input-group\">\n				<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n				<span class=\"input-group-btn\">\n					<button class=\"btn btn-default\" type=\"button\">\n						<span class=\"glyphicon glyphicon-search\"></span>\n					</button>\n				</span>\n			</div>\n		</form>\n	</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['layouts/header_home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Haul");
  }

  data.buffer.push("\n<!-- AGENCY -->\n<link href=\"/static/css/agency/agency.css\" rel=\"stylesheet\">\n\n<!-- Custom Fonts -->\n<link href=\"font-awesome-4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n<link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\n<link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n<link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\n\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-anon\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a href=\"#page-top\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden\">\n                    <a href=\"#page-top\"></a>\n                </li>\n                <li>\n                    <a class=\"page-scroll\" href=\"#how\">How It Works</a>\n                </li>\n                \n                <li>\n                    <a href=\"/signup\" class=\"page-scroll\">Sign Up</a>\n                </li>\n                <li>\n                    <a href=\"/login\" class=\"page-scroll\">Login</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n  \n\n  \n\n  \n  \n    <!-- jQuery Version 1.11.0 -->\n    <script src=\"/static/js/thirdparty/agency/jquery-1.11.0.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/bootstrap.min.js\"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/classie.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/cbpAnimatedHeader.js\"></script>\n\n    <!-- Contact Form JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/jqBootstrapValidation.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/contact_me.js\"></script>\n\n    <!-- Custom Theme JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/agency.js\"></script>");
  return buffer;
  
});Ember.TEMPLATES['messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n\n\n\n	<div class=\"row\">\n	 	<div class=\"col-md-8\">\n	    	<h1>Messages</h1>\n	    </div>\n	    <div class=\"col-md-4 text-right \">\n	    \n\n		    \n		</div>\n	</div>\n\n\n\n	<div class=\"row\">\n	    \n	    \n	</div>\n</div>");
  
});Ember.TEMPLATES['modules/carousel'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.indicatorsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.itemsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n\n<!-- Controls -->\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.imagesFound:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousSlide", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSlide", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n  </a>\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.imagesFound:hide:show")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">No Medium Size Images found</div>");
  return buffer;
  
});Ember.TEMPLATES['product/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<button class=\"btn btn-default\">Cancel</button>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "product.id", options) : helperMissing.call(depth0, "link-to", "product", "product.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n				");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Save"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n				");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Create"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<div class=\"row\">\n			<div class=\"col-md-12\"> 	\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\"> \n						<label>Name:</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'canShowValidationError': ("showErrors")
  },hashTypes:{'canShowValidationError': "ID"},hashContexts:{'canShowValidationError': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push(" \n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\"> \n						<label>Description: (max 2000)</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text"),
    'canShowValidationError': ("showErrors")
  },hashTypes:{'as': "STRING",'canShowValidationError': "ID"},hashContexts:{'as': depth0,'canShowValidationError': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "input", "description", options))));
  data.buffer.push("\n					</div> \n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-6 col-sm-6 col-xs-12\"> \n						");
  stack1 = (helper = helpers.input || (depth0 && depth0.input),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "input", "price", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-6 col-sm-6 col-xs-12\"> \n						<label>Quantity:</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("input-xs"),
    'canShowValidationError': ("showErrors")
  },hashTypes:{'class': "STRING",'canShowValidationError': "ID"},hashContexts:{'class': depth0,'canShowValidationError': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "quantity", options) : helperMissing.call(depth0, "input", "quantity", options))));
  data.buffer.push("\n	 				</div>\n				</div>\n			</div>\n		</div>\n		");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						");
  data.buffer.push(escapeExpression((helper = helpers['label-field'] || (depth0 && depth0['label-field']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "label-field", "price", options))));
  data.buffer.push("\n						<div class=\"input-group\">\n							<span class=\"input-group-addon\">$</span>\n						  	");
  data.buffer.push(escapeExpression((helper = helpers['input-field'] || (depth0 && depth0['input-field']),options={hash:{
    'class': ("form-control input-sm"),
    'canShowValidationError': ("showErrors")
  },hashTypes:{'class': "STRING",'canShowValidationError': "ID"},hashContexts:{'class': depth0,'canShowValidationError': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "input-field", "price", options))));
  data.buffer.push("\n						  	<br/>\n						</div>\n						");
  data.buffer.push(escapeExpression((helper = helpers['error-field'] || (depth0 && depth0['error-field']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "error-field", "price", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n				");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("errorMessage"),
    'type': ("danger")
  },hashTypes:{'message': "ID",'type': "STRING"},hashContexts:{'message': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n			");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers['seller-nav'] || (depth0 && depth0['seller-nav']),options={hash:{
    'user': ("currentUser.user"),
    'currentUser': ("currentUser"),
    'isProfileOwner': (true),
    'pageCreateItems': (true)
  },hashTypes:{'user': "ID",'currentUser': "ID",'isProfileOwner': "BOOLEAN",'pageCreateItems': "BOOLEAN"},hashContexts:{'user': depth0,'currentUser': depth0,'isProfileOwner': depth0,'pageCreateItems': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "seller-nav", options))));
  data.buffer.push("\n\n\n\n<div class=\"toolbar\">\n	<div class=\"text-right\">\n\n		<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":collapse showImagePicker:in:out")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.products", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.products", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-primary imagesAreSelected:enabled:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickNext", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Next Step<span class=\"glyphicon glyphicon-chevron-right\"></span></button> \n		</span>\n\n		<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":collapse showImagePicker:out:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickPrev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\"><span class=\"glyphicon 	glyphicon-picture\"></span> Change Images</button>\n				\n			");
  stack1 = helpers['if'].call(depth0, "productExists", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</span>\n	</div>\n</div>\n\n\n\n<div class=\"container\">\n\n\n	\n\n	<div id=\"stepOne\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":collapse showImagePicker:in:out")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n		<div class=\"row padding-top\">\n			<div class=\"col-md-6 col-sm-6 col-xs-6 vcenter\">\n				<h4>Start With Photos <small>(up to 5 per item)</small></h4>\n			</div>\n			<div class=\"col-md-6 col-sm-6 col-xs-6 text-right vcenter\">\n				\n			</div>\n		</div>\n\n		");
  data.buffer.push(escapeExpression((helper = helpers['image-picker'] || (depth0 && depth0['image-picker']),options={hash:{
    'images': ("controller.content"),
    'user_id': ("currentUser.id"),
    'user_token': ("currentUser.access_token"),
    'refresh': ("refresh"),
    'imageClick': ("imageClick"),
    'imageDeleted': ("imageDeleted")
  },hashTypes:{'images': "ID",'user_id': "ID",'user_token': "ID",'refresh': "STRING",'imageClick': "STRING",'imageDeleted': "STRING"},hashContexts:{'images': depth0,'user_id': depth0,'user_token': depth0,'refresh': depth0,'imageClick': depth0,'imageDeleted': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-picker", options))));
  data.buffer.push("\n\n	</div>\n\n\n\n	\n\n\n\n	<div id=\"stepTwo\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":collapse showImagePicker:out:in")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n		\n		<div class=\"row padding-top\">\n			<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n				<div class=\"row\">\n 					<div class=\"col-md-6 col-sm-6 col-xs-6 vcenter\">\n						 \n						<h4>Drag images to sort</h4>\n					</div>\n					<div class=\"col-md-6 col-sm-6 col-xs-6 text-right vcenter\">\n						\n					</div>\n				</div>\n\n				<div class=\"row\">\n					<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.JQuerySortableView", {hash:{
    'contentBinding': ("selectedImages")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("	\n					</div>\n				</div>\n			</div>\n		</div>\n\n\n		");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "product", options) : helperMissing.call(depth0, "form-for", "product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n		<div class=\"row\">\n			<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n			");
  stack1 = helpers['if'].call(depth0, "errorShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n		</div>\n		<div class=\"row padding-bottom\">\n			<div class=\"col-md-12 col-sm-12 col-xs-12 verical-align text-right\">\n\n			\n\n\n				\n			</div>\n		</div> \n\n	</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['product/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Delete your item")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(" class=\"btn btn-danger\">\n		Delete\n	</button>\n	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product.edit", "", options) : helperMissing.call(depth0, "link-to", "product.edit", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<button class=\"btn btn-primary\"  ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Edit your item")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">Edit</button>");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n				");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.CarouselView", {hash:{
    'contentBinding': ("model.images")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n			");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers['seller-nav'] || (depth0 && depth0['seller-nav']),options={hash:{
    'user': ("model.user"),
    'currentUser': ("currentUser"),
    'isProfileOwner': ("isProfileOwner")
  },hashTypes:{'user': "ID",'currentUser': "ID",'isProfileOwner': "ID"},hashContexts:{'user': depth0,'currentUser': depth0,'isProfileOwner': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "seller-nav", options))));
  data.buffer.push("\n\n\n<div class=\"toolbar text-right\">\n	<span></span>\n	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n<div class=\"container\">\n	\n	<div class=\"row padding-top\"> \n\n		\n		<div class=\"col-md-6 col-sm-12 col-xs-12 vcenter text-center \">\n			");
  data.buffer.push(escapeExpression((helper = helpers['collection-btn'] || (depth0 && depth0['collection-btn']),options={hash:{
    'class': ("display-inline"),
    'currentUser': ("currentUser"),
    'product': ("model")
  },hashTypes:{'class': "STRING",'currentUser': "ID",'product': "ID"},hashContexts:{'class': depth0,'currentUser': depth0,'product': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "collection-btn", options))));
  data.buffer.push("\n			<p>For other people to see this item, add it to a collection</p>\n\n\n\n\n		</div>\n\n		\n		<div class=\"col-md-6 col-sm-12 col-xs-12\">\n			");
  stack1 = helpers['if'].call(depth0, "model.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n		</div>\n\n\n 	</div>\n\n\n 	<div class=\"row padding-top padding-bottom\"> \n 		\n 		<div class=\"col-md-6 col-sm-12 col-xs-12\">\n			");
  data.buffer.push(escapeExpression((helper = helpers['product-details'] || (depth0 && depth0['product-details']),options={hash:{
    'seller': ("model.user"),
    'product': ("model")
  },hashTypes:{'seller': "ID",'product': "ID"},hashContexts:{'seller': depth0,'product': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "product-details", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n\n\n</div>\n\n<div id=\"deleteModal\" class=\"modal fade bs-example-modal-sm in danger\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">Delete?<br/>This cannot be undone</h4>\n		</div>\n		<div class=\"modal-body\"> \n			<p class=\"text-center\">\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProceed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-danger\">Yes, Delete</button>\n			</p>\n		</div>\n		</div>\n	</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['search'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n\n\n\n	<div class=\"row\">\n	 	<div class=\"col-md-12\">\n	    	<h1>Search</h1>\n	    </div> \n	</div>\n\n\n\n	<div class=\"row\">\n	    \n	    \n	</div>\n</div>");
  
});Ember.TEMPLATES['seller/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<div class=\"haul-grid-li \">	\n		<div class=\"sell\">  \n			<div class=\"sell-button text-center\">\n				<div class=\"sell-text text-center haul-font\">\n					\n					");
  stack1 = helpers['if'].call(depth0, "model.collections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n				</div>\n			</div> \n		</div>\n	</div>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n						Your collections.  \n					");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n						Make a collection\n						<span class=\"glyphicon glyphicon-plus-sign\"></span>\n					");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	");
  stack1 = helpers.unless.call(depth0, "model.collections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<div class=\"haul-grid-li \">	\n		<div class=\"sell\">  \n			<div class=\"sell-button text-center\">\n				<div class=\"sell-text text-center haul-font\">\n					\n					");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" had not added anything yet.\n\n				</div>\n			</div> \n		</div>\n	</div>\n	");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "collection", "collection", options) : helperMissing.call(depth0, "link-to", "collection", "collection", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	<div class=\"haul-grid-li\"> \n			<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("collection.image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n			\n			<div class=\"sold\">edit</div>\n\n\n			<div class=\"info\">		\n		 	  	<div class=\"price\"> ");
  stack1 = helpers._triageMustache.call(depth0, "collection_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>   \n			</div>			\n	 	</div>\n	 	");
  return buffer;
  }

  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers['seller-nav'] || (depth0 && depth0['seller-nav']),options={hash:{
    'user': (""),
    'currentUser': ("currentUser"),
    'isProfileOwner': ("isProfileOwner"),
    'pageCollections': (true)
  },hashTypes:{'user': "ID",'currentUser': "ID",'isProfileOwner': "ID",'pageCollections': "BOOLEAN"},hashContexts:{'user': depth0,'currentUser': depth0,'isProfileOwner': depth0,'pageCollections': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "seller-nav", options))));
  data.buffer.push("\n\n\n<div class=\"toolbar\"><span></span></div>\n \n<div class=\"container\"> \n\n\n	\n	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	");
  stack1 = helpers.unless.call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n	\n	");
  stack1 = helpers.each.call(depth0, "model.collections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n</div> \n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['seller/products'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "id", options) : helperMissing.call(depth0, "link-to", "product", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	<div class=\"haul-grid-li\"> \n			<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n			");
  stack1 = helpers['if'].call(depth0, "sold", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n			<div class=\"info\">		\n		 	  	<div class=\"price\"> $");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>   \n			</div>			\n	 	</div>\n	 	");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"sold\">Sold</div>\n			");
  }

  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers['seller-nav'] || (depth0 && depth0['seller-nav']),options={hash:{
    'user': ("user"),
    'currentUser': ("currentUser"),
    'isProfileOwner': ("isProfileOwner"),
    'pageItems': (true)
  },hashTypes:{'user': "ID",'currentUser': "ID",'isProfileOwner': "ID",'pageItems': "BOOLEAN"},hashContexts:{'user': depth0,'currentUser': depth0,'isProfileOwner': depth0,'pageItems': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "seller-nav", options))));
  data.buffer.push("\n\n<div class=\"toolbar\"><span></span></div>\n \n<div class=\"container\"> \n\n	\n	\n	<div class=\"haul-grid-li \">	\n		<div class=\"sell\">  \n			<div class=\"sell-button text-center\">\n				<div class=\"sell-text text-center haul-font\">\n					Your items.  \n				</div>\n			</div> \n		</div>\n	</div>\n\n\n\n	\n    ");
  stack1 = helpers.each.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n</div>");
  return buffer;
  
});Ember.TEMPLATES['settings/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n\n	<div class=\"row\">\n		\n		\n\n		<div class=\"col-md-3 content-toc\">\n			<div class=\"margin-top\" data-spy=\"affix\" data-offset-top=\"50\">	\n				<div class=\"nav-wrapper\">\n					<ul class=\"nav nav-pills nav-stacked toc\" role=\"tablist\"> \n					  <li role=\"presentation\"><a href=\"#profile\">Profile</a></li> \n					</ul>\n				</div>\n			</div>\n		</div>\n\n\n		\n\n		<div class=\"col-md-9 content-scroll\" data-spy=\"scroll\" data-target=\".nav-wrapper\" data-offset=\"200\">\n\n			<div class=\"panel panel-default margin-top\" id=\"profile\">\n			  <!-- Default panel contents -->\n			  <div class=\"panel-heading\">Profile</div>\n			  <div class=\"panel-body\">\n			    	");
  data.buffer.push(escapeExpression((helper = helpers['icon-maker'] || (depth0 && depth0['icon-maker']),options={hash:{
    'item': ("currentUser"),
    'currentUser': ("currentUser")
  },hashTypes:{'item': "ID",'currentUser': "ID"},hashContexts:{'item': depth0,'currentUser': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "icon-maker", options))));
  data.buffer.push("\n			  </div> \n			</div> \n		</div>\n	</div>\n</div>");
  return buffer;
  
});