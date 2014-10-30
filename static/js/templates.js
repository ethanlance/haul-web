Ember.TEMPLATES['403'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops you cannot access that page.</h1>\n		</div>\n	</div>\n</div>");
  
});Ember.TEMPLATES['404'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container\">\n	<div class=\"row	\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops we can't find that page.</h1>\n		</div>\n	</div>\n</div>");
  
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
  
});Ember.TEMPLATES['home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<!-- Header -->\n    <header>\n        <div class=\"container\">\n            <div class=\"intro-text\">\n                <div class=\"intro-lead-in\">The Best Way To Sell</div>\n                <div class=\"intro-heading\">For passionate communities</div>\n                <a href=\"#how\" class=\"page-scroll btn btn-xl\">Tell Me More</a>\n            </div>\n        </div>\n    </header>\n\n    <!-- Services Section -->\n    <section id=\"how\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">How It Works</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row text-center\">\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">For Sellers</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">For Buyers</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-lock fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">For Comuunities</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n   \n\n\n\n   \n\n   \n\n\n\n\n\n\n\n");
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
  


  data.buffer.push("\n\n\n<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops you cannot access that page.</h1>\n		</div>\n	</div>\n</div>");
  
});Ember.TEMPLATES['404'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n\n\n<div class=\"container\">\n	<div class=\"row	\">\n		<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n			<h1>Oops we can't find that page.</h1>\n		</div>\n	</div>\n</div>");
  
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
    'placeholder': ("Password")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "password", options) : helperMissing.call(depth0, "input", "password", options))));
  data.buffer.push(" \n					</div> \n\n\n		 \n			 		<div class=\"form-group\">	\n			 			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'placeholder': ("First Name")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "firstname", options) : helperMissing.call(depth0, "input", "firstname", options))));
  data.buffer.push(" \n					</div> \n\n\n		 \n			 		<div class=\"form-group\">	\n			 			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'placeholder': ("Last Name")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "lastname", options) : helperMissing.call(depth0, "input", "lastname", options))));
  data.buffer.push(" \n					</div> \n\n\n					<div class=\"form-group\">\n				  		");
  data.buffer.push(escapeExpression((helper = helpers.submit || (depth0 && depth0.submit),options={hash:{
    'class': ("btn btn-primary btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "submit", options))));
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
    'src': ("image.thumb")
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
    'src': ("view.content.data.thumb")
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

  data.buffer.push("<div class=\"row haul-image-picker-well\">\n	<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n		<div id='haul-dropzone'>\n			<div><button id=\"haul-dropzone-browse\" class=\"btn btn-default\">Browse Files</button> or drop images anywhere in this box.</div>\n				\n				<div class=\"haul-grid\">\n					<div class=\"dropzone-preview\"></div>\n						\n				");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n			<div style=\"clear: both;\"></div>\n		</div>\n	</div>\n</div>\n \n<div id=\"imagePickerModal\"	class=\"modal fade bs-example-modal-sm in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">5 images max</h4>\n		</div>\n		<div class=\"modal-body\">\n			<p>Hello, you've selected 5 images. That's the maximum images a product can have.</p>\n			<p>Deselect an image or click \"Next Step\".</p>\n		</div>\n		</div>\n	</div>\n</div>\n\n\n\n\n<div class=\"modal fade bs-example-modal-sm in \" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" ");
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
  
});Ember.TEMPLATES['components/product-to-store'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							\n							<div class=\"row\">\n								<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n									<h3>");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n								</div>\n							</div>\n							<div class=\"row\">\n								<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n									<label>Tell everyone what's so awesome about this.</label>\n									");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text"),
    'canShowValidationError': ("showErrors")
  },hashTypes:{'as': "STRING",'canShowValidationError': "ID"},hashContexts:{'as': depth0,'canShowValidationError': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "editorial", options) : helperMissing.call(depth0, "input", "editorial", options))));
  data.buffer.push("\n								</div> \n							</div>\n							");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n							");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("errorMessage"),
    'type': ("danger")
  },hashTypes:{'message': "ID",'type': "STRING"},hashContexts:{'message': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "currentUser.user.market.market_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "curate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Add To: ");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.user.market.market_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n\n\n\n\n<div id=\"curateModal\" class=\"modal modal fade in danger text-left\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-lg\">\n		<div class=\"modal-content\">\n\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n				<h4 class=\"modal-title\" id=\"mySmallModalLabel\">\n					Add To: ");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.user.market.market_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</h4>\n			</div>\n\n			<div class=\"modal-body\"> \n\n				\n\n				<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("showForm:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n					<div class=\"row\">\n						<div class=\"col-md-6 col-sm-12 col-xs-12\">\n						 	<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						</div>\n\n						<div class=\"col-md-6 col-sm-12 col-xs-12\">\n\n							");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n\n						</div>\n					</div>\n\n					<div class=\"row\">\n						<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n						");
  stack1 = helpers['if'].call(depth0, "errorShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n						</div>\n					</div>\n\n					<div class=\"row\">\n						<div class=\"col-md-12 col-sm-12 col-xs-12 text-right\">\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "curateCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n\n							");
  data.buffer.push(escapeExpression((helper = helpers['ladda-btn'] || (depth0 && depth0['ladda-btn']),options={hash:{
    'name': ("Save"),
    'class': ("display-inline"),
    'btnClasses': ("btn btn-primary ladda-button"),
    'btnClick': ("submit"),
    'spin': ("isProcessing")
  },hashTypes:{'name': "STRING",'class': "STRING",'btnClasses': "STRING",'btnClick': "STRING",'spin': "ID"},hashContexts:{'name': depth0,'class': depth0,'btnClasses': depth0,'btnClick': depth0,'spin': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ladda-btn", options))));
  data.buffer.push(" \n						</div>\n					</div> \n				</div>\n\n\n				\n\n				<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("showSuccessMessage:show:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n					<div class=\"row\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("styleSuccessMessage:off")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						<div class=\"col-md-6 col-sm-12 col-xs-12\">\n						 	<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						</div>\n\n						<div class=\"col-md-6 col-sm-12 col-xs-12\">\n\n							<h3>Added</h3>\n\n							<p>You added ");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to your store, ");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.user.market.market_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<p>\n\n							<p>Go to ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "market", "currentUser.user.market.market_id", options) : helperMissing.call(depth0, "link-to", "market", "currentUser.user.market.market_id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" or <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">close window</a></p>\n\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/profile-user'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n \n		<div class=\"btn-group navbar-profile\">\n		\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickProfile", "currentUser.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default\">\n				\n				<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("currentUser.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n				<span class=\"profile-name\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "currentUser.id", options) : helperMissing.call(depth0, "link-to", "seller", "currentUser.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n		  		\n			</button>\n\n		  <div class=\"btn-group\">\n		    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n		      <span class=\"glyphicon glyphicon-cog\"></span>\n		    </button>\n		    <ul class=\"dropdown-menu\" role=\"menu\">\n\n		    	<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				\n\n				\n				");
  stack1 = helpers['if'].call(depth0, "currentUser.user.market", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n				<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-product", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-product", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n\n\n				<li class=\"divider\"></li> \n				<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "logout", options) : helperMissing.call(depth0, "link-to", "logout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n		    </ul>\n		  </div>\n		</div> \n\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "currentUser.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  
  data.buffer.push("My Stuff");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "market", "currentUser.user.market.market_id", options) : helperMissing.call(depth0, "link-to", "market", "currentUser.user.market.market_id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n				");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("My Store: ");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.user.market.market_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-market", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-market", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n				");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("Create A Store");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Sell Something");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("Logout");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n\n		<div class=\"navbar-profile\">\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signup", options) : helperMissing.call(depth0, "link-to", "signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n\n		");
  return buffer;
  }
function program17(depth0,data) {
  
  
  data.buffer.push("<button type=\"button\" class=\"btn btn-default signup\">SIGNUP</button>");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("<button type=\"button\" class=\"btn btn-default\">LOGIN</button>");
  }

  data.buffer.push("		");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
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
  
});Ember.TEMPLATES['home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<!-- Header -->\n    <header>\n        <div class=\"container\">\n            <div class=\"intro-text\">\n                <div class=\"intro-lead-in\">The Best Way To Sell</div>\n                <div class=\"intro-heading\">For passionate communities</div>\n                <a href=\"#how\" class=\"page-scroll btn btn-xl\">Tell Me More</a>\n            </div>\n        </div>\n    </header>\n\n    <!-- Services Section -->\n    <section id=\"how\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">How It Works</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row text-center\">\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">For Sellers</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">For Buyers</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-lock fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">For Comuunities</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n   \n\n\n\n   \n\n   \n\n\n\n\n\n\n\n");
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
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "base", options) : helperMissing.call(depth0, "link-to", "base", options));
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

  data.buffer.push("<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n	\n	<div class=\"navbar-header\">\n		<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n			<span class=\"sr-only\">Toggle navigation</span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n		</button>\n				\n		<div class=\"logo-outer\">\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "base", options) : helperMissing.call(depth0, "link-to", "base", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n\n		<div class=\"navbar-right\">\n\n		");
  data.buffer.push(escapeExpression((helper = helpers['profile-user'] || (depth0 && depth0['profile-user']),options={hash:{
    'currentUser': ("controllers.auth.currentUser"),
    'clickTransition': ("clickTransition")
  },hashTypes:{'currentUser': "ID",'clickTransition': "STRING"},hashContexts:{'currentUser': depth0,'clickTransition': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "profile-user", options))));
  data.buffer.push("\n		 \n		</div> 	\n	</div>\n\n 	<div class=\"navbar-center navbar-collapse collapse\">\n		<form class=\"navbar-form\" role=\"search\">\n			<div class=\"input-group\">\n				<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n				<span class=\"input-group-btn\">\n					<button class=\"btn btn-default\" type=\"button\">\n						<span class=\"glyphicon glyphicon-search\"></span>\n					</button>\n				</span>\n			</div>\n		</form>\n	</div>\n\n\n</div>");
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
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "base", options) : helperMissing.call(depth0, "link-to", "base", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a href=\"#page-top\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden\">\n                    <a href=\"#page-top\"></a>\n                </li>\n                <li>\n                    <a class=\"page-scroll\" href=\"#how\">How It Works</a>\n                </li>\n                \n                <li>\n                    <a href=\"/signup\" class=\"page-scroll\">Sign Up</a>\n                </li>\n                <li>\n                    <a href=\"/login\" class=\"page-scroll\">Login</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n  \n\n  \n\n  \n  \n    <!-- jQuery Version 1.11.0 -->\n    <script src=\"/static/js/thirdparty/agency/jquery-1.11.0.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/bootstrap.min.js\"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/classie.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/cbpAnimatedHeader.js\"></script>\n\n    <!-- Contact Form JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/jqBootstrapValidation.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/contact_me.js\"></script>\n\n    <!-- Custom Theme JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/agency.js\"></script>");
  return buffer;
  
});Ember.TEMPLATES['market/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n		<div class=\"row\">\n			<div class=\"col-md-12\"> 	\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\"> \n						<label>Name:</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push(" \n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\"> \n						<label>Description: (max 500)</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text")
  },hashTypes:{'as': "STRING"},hashContexts:{'as': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "input", "description", options))));
  data.buffer.push("\n					</div> \n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\">\n					");
  data.buffer.push(escapeExpression((helper = helpers.submit || (depth0 && depth0.submit),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "submit", "Save", options))));
  data.buffer.push("\n					</div>\n				</div>\n			</div>\n		</div>\n	");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n\n	<div class=\"row padding-top\">\n		<div class=\"col-md-6 col-sm-6 col-xs-6 vcenter\">\n			<h4>Create Your Store</h4>\n		</div>\n	</div>\n\n\n	");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['market/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					  	<div class=\"profile-circular-mask\">\n					  	");
  stack1 = helpers['if'].call(depth0, "user.picture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					    </div>\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n					    	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n					    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("by ");
  stack1 = helpers._triageMustache.call(depth0, "market.user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    \n    	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n	");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	<div class=\"haul-grid-li\"> \n\n				<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n				");
  stack1 = helpers['if'].call(depth0, "sold", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n				<div class=\"info\">		\n			 	  	<div class=\"price\"> $");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>   \n				</div>\n\n				");
  stack1 = helpers._triageMustache.call(depth0, "editorial", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			\n	 	</div>\n	 	");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"sold\">Sold</div>\n				");
  }

  data.buffer.push("\n\n\n\n<div class=\"container-fluid padding-bottom padding-top\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n	    	<div class=\"row\">\n		    	<div class=\"col-md-9 col-sm-9 col-xs-12 haul-profile-header haul-font\">\n\n					<div class=\"media\">\n\n					");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-left")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n					  	<div class=\"media-body\">\n					     	<h1 class=\"media-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "market.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n					     	<h5>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "market.user", options) : helperMissing.call(depth0, "link-to", "seller", "market.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>\n					  	</div>\n					</div> \n		    	</div> \n		    </div>\n		</div>\n	</div>\n</div>	\n\n\n\n\n\n\n \n<div class=\"container\">\n\n    ");
  stack1 = helpers.each.call(depth0, "market.products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div> \n\n\n\n");
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
  data.buffer.push(" \n\n<!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousSlide", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSlide", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n  </a>");
  return buffer;
  
});Ember.TEMPLATES['product/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n		<div class=\"row\">\n			<div class=\"col-md-12\"> 	\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\"> \n						<label>Name:</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "input", "name", options))));
  data.buffer.push(" \n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-8 col-sm-8 col-xs-12\"> \n						<label>Description: (max 500)</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'as': ("text")
  },hashTypes:{'as': "STRING"},hashContexts:{'as': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "input", "description", options))));
  data.buffer.push("\n					</div> \n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-6 col-sm-6 col-xs-12\"> \n						");
  stack1 = (helper = helpers.input || (depth0 && depth0.input),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "input", "price", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-6 col-sm-6 col-xs-12\"> \n						<label>Quantity:</label>\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("input-xs")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "quantity", options) : helperMissing.call(depth0, "input", "quantity", options))));
  data.buffer.push("\n	 				</div>\n				</div>\n			</div>\n		</div>\n		\n\n\n\n		<div class=\"row\">\n			<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\n			");
  stack1 = helpers['if'].call(depth0, "errorShow", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n		</div>\n		<div class=\"row padding-bottom\">\n			<div class=\"col-md-12 col-sm-12 col-xs-12 verical-align text-right\">\n\n			");
  stack1 = helpers['if'].call(depth0, "productExists", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n				\n			</div>\n		</div> \n\n\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n						");
  data.buffer.push(escapeExpression((helper = helpers['label-field'] || (depth0 && depth0['label-field']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "label-field", "price", options))));
  data.buffer.push("\n						<div class=\"input-group\">\n							<span class=\"input-group-addon\">$</span>\n						  	");
  data.buffer.push(escapeExpression((helper = helpers['input-field'] || (depth0 && depth0['input-field']),options={hash:{
    'class': ("form-control input-sm")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "input-field", "price", options))));
  data.buffer.push("\n						  	<br/>\n						</div>\n						");
  data.buffer.push(escapeExpression((helper = helpers['error-field'] || (depth0 && depth0['error-field']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "error-field", "price", options))));
  data.buffer.push("\n						");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n				");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("errorMessage"),
    'type': ("danger")
  },hashTypes:{'message': "ID",'type': "STRING"},hashContexts:{'message': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n				");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "product.id", options) : helperMissing.call(depth0, "link-to", "product", "product.id", options));
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
function program7(depth0,data) {
  
  
  data.buffer.push("<button class=\"btn btn-default\">Cancel</button>");
  }

function program9(depth0,data) {
  
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

  data.buffer.push("\n<div class=\"container\">\n\n\n	\n\n	<div id=\"stepOne\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":collapse showImagePicker:in:out")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n		<div class=\"row padding-top\">\n			<div class=\"col-md-6 col-sm-6 col-xs-6 vcenter\">\n				<h4>Select up to 5 images.</h4>\n			</div>\n			<div class=\"col-md-6 col-sm-6 col-xs-6 text-right vcenter\">\n				<button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-sm :btn-primary imagesAreSelected:enabled:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickNext", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Next Step<span class=\"glyphicon glyphicon-chevron-right\"></span></button> \n			</div>\n		</div>\n\n		");
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
  data.buffer.push(">\n		\n		<div class=\"row padding-top\">\n			<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n				<div class=\"row\">\n 					<div class=\"col-md-6 col-sm-6 col-xs-6 vcenter\">\n						 \n						<h4>Drag images to sort</h4>\n					</div>\n					<div class=\"col-md-6 col-sm-6 col-xs-6 text-right vcenter\">\n						<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickPrev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-sm btn-primary\"><span class=\"glyphicon 	glyphicon-picture\"></span> Change Images</button>\n					</div>\n				</div>\n\n				<div class=\"row\">\n					<div class=\"col-md-12 col-sm-12 col-xs-12\"> \n						");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.JQuerySortableView", {hash:{
    'contentBinding': ("selectedImages")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("	\n					</div>\n				</div>\n			</div>\n		</div>\n\n\n		");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "product", options) : helperMissing.call(depth0, "form-for", "product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['product/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n			");
  data.buffer.push(escapeExpression((helper = helpers['product-to-store'] || (depth0 && depth0['product-to-store']),options={hash:{
    'class': ("display-inline"),
    'currentUser': ("currentUser"),
    'product': ("model")
  },hashTypes:{'class': "STRING",'currentUser': "ID",'product': "ID"},hashContexts:{'class': depth0,'currentUser': depth0,'product': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "product-to-store", options))));
  data.buffer.push("\n		");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product.edit", "", options) : helperMissing.call(depth0, "link-to", "product.edit", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-danger\">Delete</button>\n		");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("<button class=\"btn btn-default\">Edit</button>");
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n				");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.CarouselView", {hash:{
    'contentBinding': ("model.images")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n			");
  return buffer;
  }

function program8(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  stack1 = helpers._triageMustache.call(depth0, "oulet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"container\">\n\n	\n\n	<div class=\"row\">\n		<div class=\"col-md-12 text-right\">\n		\n		");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		</div>\n	</div>\n\n	\n	<div class=\"row padding-top\">\n\n		\n\n		<div class=\"col-md-6 col-sm-12 col-xs-12\">\n			");
  stack1 = helpers['if'].call(depth0, "model.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n		</div>\n\n		\n\n		<div class=\"col-md-6 col-sm-12 col-xs-12\">\n			<div class=\"row\">\n				<div class=\"col-md-12 haul-buy-card\">\n					\n					\n\n					<div class=\"row button-bar\"> \n							<div class=\"col-md-6 col-sm-6 col-xs-6\">\n								<span class=\"lead haul-price\">$");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n								<button type=\"button\" class=\"btn btn-primary btn-lg\">BUY</button>\n							</div>\n\n							<div class=\"col-md-6 col-sm-6 col-xs-6 text-right\">\n							<span class=\"btn-group \">\n								<button type=\"button\" class=\"btn btn-default btn-md\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "likeProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Like This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n								  13 <span class=\"glyphicon glyphicon-heart\"></span>\n								</button>	\n\n								<button type=\"button\" class=\"btn btn-default btn-md\" ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Comment on This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n									4 <span class=\"glyphicon glyphicon-comment\"></span>\n								</button>\n\n								<button type=\"button\" class=\"btn btn-default btn-md\" { action 'shareProduct'}} ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Share This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n								  &nbsp;<span class=\"glyphicon glyphicon-share\"></span>\n								</button>\n								</span>\n							</div>\n					</div>\n\n					\n\n					<div class=\"row\">\n						<div class=\"col-md-12\">\n							\n							<span class=\"haul-font\"><strong>Seller:</strong></span>\n							\n							<div class=\"media\">\n								<div class=\"pull-left\">\n									<div class=\"profile-small-circular-mask\">\n		    							<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n		    						</div>\n		    						<br/>\n		    						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	    						</div>\n		    					<div class=\"media-body\">\n		    						<h4>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n		    						");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		    					</div>\n		    				</div>\n						</div>\n					</div> \n				</div>\n\n \n\n				\n				<div class=\"col-md-12 haul-buy-card\">\n					<div class=\"row\">\n						<div class=\"col-md-12\">\n						<h4>Comments</h4>\n\n						");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("message"),
    'name': ("message"),
    'cols': ("80"),
    'rows': ("3"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'name': "STRING",'cols': "STRING",'rows': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'name': depth0,'cols': depth0,'rows': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n							<div class=\"text-right padding-top\">\n								<button class=\"btn btn-default\">post</button>\n							</div>\n						</div>\n					</div>\n				</div>\n\n\n\n			</div>\n		</div> \n	</div>\n</div>\n\n<div id=\"deleteModal\" class=\"modal fade bs-example-modal-sm in danger\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog modal-sm\">\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n			<h4 class=\"modal-title\" id=\"mySmallModalLabel\">Delete?<br/>This cannot be undone</h4>\n		</div>\n		<div class=\"modal-body\"> \n			<p class=\"text-center\">\n				<button ");
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
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					  	<div class=\"profile-circular-mask\">\n					  	");
  stack1 = helpers['if'].call(depth0, "user.picture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					    </div>\n					 ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n					    	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n					    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n	    					");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n	    						<button class=\"btn btn-primary\">follow</button>\n	    						<button class=\"btn btn-default\">\n	    							<span class=\"glyphicon glyphicon-envelope\"></span>\n	    						</button>\n	    					");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("		\n								");
  stack1 = helpers['if'].call(depth0, "user.market.market_id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n									");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "market", "user.market.market_id", options) : helperMissing.call(depth0, "link-to", "market", "user.market.market_id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<button class=\"btn btn-default\">My Store: ");
  stack1 = helpers._triageMustache.call(depth0, "user.market.market_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n\n");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program15(depth0,data) {
  
  
  data.buffer.push("\n\n	");
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"container\">\n	<div class=\"haul-container\">\n		<div class=\"row\">\n			<div class=\"col-md-12 text-center\">\n				<h3>");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" has nothing to sell yet.</h3>\n			</div>\n		</div>\n	</div>\n</div>\n	");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	");
  stack1 = helpers['if'].call(depth0, "user.market.market_id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<div class=\"haul-grid-li \">	\n		<div class=\"sell\"> \n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-market", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-market", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	");
  return buffer;
  }
function program23(depth0,data) {
  
  
  data.buffer.push("\n			<div class=\"sell-button text-center\">\n				<div class=\"sell-text text-center haul-font\">\n					<div class=\"glyphicon glyphicon-plus-sign\"></div><br/>	\n					Start Your Store\n				</div>\n			</div>\n			");
  }

function program25(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<div class=\"haul-grid-li \">	\n		<div class=\"sell\"> \n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller.new-product", "currentUser.slug", options) : helperMissing.call(depth0, "link-to", "seller.new-product", "currentUser.slug", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	");
  return buffer;
  }
function program26(depth0,data) {
  
  
  data.buffer.push("\n			<div class=\"sell-button text-center\">\n				<div class=\"sell-text text-center haul-font\">\n					<div class=\"glyphicon glyphicon-plus-sign\"></div><br/>\n					Sell Something\n				</div>\n			</div>\n			");
  }

function program28(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n	");
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	<div class=\"haul-grid-li\"> \n    	\n				<img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.small")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n				");
  stack1 = helpers['if'].call(depth0, "sold", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n				<div class=\"info\">		\n			 	  	<div class=\"price\"> $");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>   \n				</div>\n			\n	 	</div>\n	 	");
  return buffer;
  }
function program30(depth0,data) {
  
  
  data.buffer.push("\n					<div class=\"sold\">Sold</div>\n				");
  }

  data.buffer.push("\n\n<div class=\"container-fluid padding-bottom padding-top\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n	    	<div class=\"row\">\n		    	<div class=\"col-md-9 col-sm-9 col-xs-12 haul-profile-header haul-font\">\n\n					<div class=\"media\">\n\n					");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-left")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "seller", "user", options) : helperMissing.call(depth0, "link-to", "seller", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n					  <div class=\"media-body\">\n					     	<h1 class=\"media-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n	    					<div>\n	    					");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	    						<div><span class=\"medium\">175 Followers - Following 15</span></div>\n	    					\n\n	    				\n\n	    					");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n\n	    					</div>\n					  </div>\n					</div> \n		    	</div> \n		    </div>\n		</div>\n	</div>\n</div>	\n\n\n\n");
  stack1 = helpers['if'].call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n \n<div class=\"container\">\n\n	\n	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n\n	\n	");
  stack1 = helpers['if'].call(depth0, "isProfileOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n	\n    ");
  stack1 = helpers.each.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div> \n\n\n\n");
  return buffer;
  
});