Ember.TEMPLATES['account'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "outlet", "header", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "main", options) : helperMissing.call(depth0, "outlet", "main", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "outlet", "footer", options))));
  data.buffer.push("\n\n");
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
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "outlet", "header", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "main", options) : helperMissing.call(depth0, "outlet", "main", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "outlet", "footer", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bs-tooltip-box", options) : helperMissing.call(depth0, "outlet", "bs-tooltip-box", options))));
  return buffer;
  
});Ember.TEMPLATES['auth/auth'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['auth/confirmation'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  
});Ember.TEMPLATES['auth/forgotpassword'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n			\n            	<form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n					<div class=\"form-group\">\n						<h2 class=\"form-signin-heading\">Forgot Your Password?</h2>\n					</div>\n\n\n\n				  	<div class=\"form-group\"> \n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Type your email address")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			      	</div> \n\n					<div class=\"form-group\">\n				  		<buttontype=\"submit\" class=\"btn btn-primary btn-block\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'disabled': ("isProcessing")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">request password reset</button>\n				  	</div>\n\n				</form> \n\n\n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>");
  return buffer;
  
});Ember.TEMPLATES['auth/login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n				  ");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n				  \n				  ");
  stack1 = helpers['if'].call(depth0, "error409", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n				  	<div class=\"form-group\" >\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'placeholder': ("email address")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "email", options) : helperMissing.call(depth0, "input", "email", options))));
  data.buffer.push("\n			      	</div>\n\n			 		<div class=\"form-group\">	\n			      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'placeholder': ("password")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "password", options) : helperMissing.call(depth0, "input", "password", options))));
  data.buffer.push("\n					</div> \n\n					<div class=\"form-group\">\n						");
  data.buffer.push(escapeExpression((helper = helpers.submit || (depth0 && depth0.submit),options={hash:{
    'class': ("btn btn-primary btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "submit", options))));
  data.buffer.push("\n				  	</div>\n\n				  	<div class=\"text-right\">\n				  		<span class=\"muted\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.forgotpassword", options) : helperMissing.call(depth0, "link-to", "auth.forgotpassword", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n				  	</div>\n\n				");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n				    <div class=\"alert\">Invalid username or password.</div>\n				  ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n				    <div class=\"alert\">Your email needs to be validated before you can login.</div>\n				  ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("Forgot Password?");
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n 				<div class=\"form-group\">\n					<h2 class=\"form-signin-heading\">Please sign in!</h2>\n				</div>\n\n				");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
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
  
  
  data.buffer.push("\n					<h2 class=\"form-signin-heading\">Please check your email inbox.  We sent you a confirmation email.</h2>\n\n				");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("	\n\n\n					<div class=\"form-group\">\n						<h2 class=\"form-signin-heading\">Register With Email</h2>\n					</div>\n\n\n\n					");
  stack1 = helpers['if'].call(depth0, "error409", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n					");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n\n            		");
  stack1 = (helper = helpers['form-for'] || (depth0 && depth0['form-for']),options={hash:{
    'wrapper': ("bs3-wrapper")
  },hashTypes:{'wrapper': "STRING"},hashContexts:{'wrapper': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "form-for", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n				    	<div class=\"alert\">Uhoh, that email is already in use.</div>\n				  	");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n				    	<div class=\"alert\">Oh no! Something went wrong.</div>\n				  	");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n					  ");
  stack1 = helpers['if'].call(depth0, "submitFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n\n					  	<div class=\"form-group\"> \n				      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'placeholder': ("email address")
  },hashTypes:{'placeholder': "STRING"},hashContexts:{'placeholder': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "email", options) : helperMissing.call(depth0, "input", "email", options))));
  data.buffer.push("\n				      	</div> \n\n						<div class=\"form-group\">\n					  		");
  data.buffer.push(escapeExpression((helper = helpers.submit || (depth0 && depth0.submit),options={hash:{
    'class': ("btn btn-primary btn-block")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "submit", options))));
  data.buffer.push("\n					  	</div>\n					");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("\n					    <div class=\"alert\">Oh no, something went wrong.</div>\n					  ");
  }

  data.buffer.push("<!-- Header -->\n<header>\n    <div class=\"container\">\n        <div class=\"row\">\n        	<div class=\"col-md-4 \"></div>\n			<div class=\"col-md-4 form\">\n\n				");
  stack1 = helpers['if'].call(depth0, "emailRegistrationRequested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n			<div class=\"col-md-4\"></div>\n        </div>\n    </div>\n</header>\n ");
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
  
  
  data.buffer.push("Sign Up!");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  data.buffer.push("\n    <!-- AGENCY -->\n    <link href=\"/static/css/agency/agency.css\" rel=\"stylesheet\">\n    <link href=\"/static/css/agency/agency_anon.css\" rel=\"stylesheet\">\n\n    <!-- Custom Fonts -->\n    <link href=\"font-awesome-4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n    <link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\n    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\n\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-anon\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a href=\"#page-top\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden\">\n                    <a href=\"#page-top\"></a>\n                </li>\n                <li>\n                    <a class=\"page-scroll\" href=\"/#how\">How It Works</a>\n                </li>\n                \n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.login", options) : helperMissing.call(depth0, "link-to", "auth.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n  \n\n  \n\n  \n  \n    ");
  return buffer;
  
});Ember.TEMPLATES['layouts/header_base'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Haul");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("search");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Products");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Messages");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Profile");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Settings");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Help");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("Logout");
  }

  data.buffer.push("	\n<link rel=\"stylesheet\" href=\"/static/css/haul.css\">\n<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n	\n	<div class=\"navbar-header\">\n		<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n			<span class=\"sr-only\">Toggle navigation</span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n			<span class=\"icon-bar\"></span>\n		</button>\n				\n		<div class=\"logo-outer\">\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n\n 	<div class=\"navbar-search collapse navbar-collapse\">\n		<form class=\"navbar-form\" role=\"search\">\n			<div class=\"input-group\">\n				<input type=\"text\" class=\"form-control\" placeholder=\"search for a product\">\n				<span class=\"input-group-addon\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "link-to", "search", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n			</div>\n		</form>\n	</div>\n\n	<div class=\"navbar-collapse collapse navbar-right\">\n		<ul class=\"nav navbar-nav\">\n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "messages", options) : helperMissing.call(depth0, "link-to", "messages", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			<li class=\"dropdown\">\n			<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">");
  stack1 = helpers._triageMustache.call(depth0, "controllers.auth.currentUser.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span class=\"caret\"></span></a>\n				<ul class=\"dropdown-menu\" role=\"menu\">\n					<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "account.profile", options) : helperMissing.call(depth0, "link-to", "account.profile", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n					<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "account.settings", options) : helperMissing.call(depth0, "link-to", "account.settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n					<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "account.help", options) : helperMissing.call(depth0, "link-to", "account.help", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> \n					<li class=\"divider\"></li> \n					<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.logout", options) : helperMissing.call(depth0, "link-to", "auth.logout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n				</ul>\n			</li>\n		</ul>\n	</div> \n</div>");
  return buffer;
  
});Ember.TEMPLATES['layouts/header_home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Haul");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Sign Up!");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  data.buffer.push("\n<!-- AGENCY -->\n<link href=\"/static/css/agency/agency.css\" rel=\"stylesheet\">\n\n<!-- Custom Fonts -->\n<link href=\"font-awesome-4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n<link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\n<link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n<link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\n\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-anon\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a href=\"#page-top\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden\">\n                    <a href=\"#page-top\"></a>\n                </li>\n                <li>\n                    <a class=\"page-scroll\" href=\"#how\">How It Works</a>\n                </li>\n                \n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("page-scroll")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.login", options) : helperMissing.call(depth0, "link-to", "auth.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n  \n\n  \n\n  \n  \n    <!-- jQuery Version 1.11.0 -->\n    <script src=\"/static/js/thirdparty/agency/jquery-1.11.0.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/bootstrap.min.js\"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/classie.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/cbpAnimatedHeader.js\"></script>\n\n    <!-- Contact Form JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/jqBootstrapValidation.js\"></script>\n    <script src=\"/static/js/thirdparty/agency/contact_me.js\"></script>\n\n    <!-- Custom Theme JavaScript -->\n    <script src=\"/static/js/thirdparty/agency/agency.js\"></script>");
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
  
});Ember.TEMPLATES['products/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"container\">\n\n	<ol class=\"breadcrumb\">\n	  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "products", "user", options) : helperMissing.call(depth0, "link-to", "products", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n	  <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n	</ol>\n\n\n	<div class=\"row\">\n		<div class=\"col-md-6\">\n			<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n		</div>\n		<div class=\"col-md-2\"></div>\n		<div class=\"col-md-4 text-right\">\n			<button class=\"btn btn-warning\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Preview</button>\n		    <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</button>\n		    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Save</button>\n		    \n		</div>  \n	</div>\n\n\n	<div class=\"row\">\n		<div class=\"col-md-5\">\n			<div class=\"row\">\n				<div class=\"col-md-12\">\n					<img class=\"img-thumbnail\" data-src=\"holder.js/100%x180\" alt=\"...\">\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-md-12\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n					<img class=\"img-thumbnail\" data-src=\"holder.js/50x50\" alt=\"...\">\n				</div>\n			</div>\n		</div>\n\n		<div class=\"col-md-7\">\n\n			<div class=\"form-group\">\n				<label>Title:</label>\n				");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n				<label>Description:</label>\n				");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'name': ("description"),
    'cols': ("80"),
    'rows': ("6"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'name': "STRING",'cols': "STRING",'rows': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'name': depth0,'cols': depth0,'rows': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n\n\n				<label>Price:</label>\n				");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("price"),
    'value': ("price"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n				<label>Quantity:</label>\n				");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n				<label>Title:</label>\n				");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n				\n\n\n			</div>\n		</div>\n		<div class=\"col-md-4\">\n			<div class=\"well \">Well Meta</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['products/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	    	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	    	<li> \n				<div class=\"product-wrapper\">\n			   \n				    <div class=\"photo-wrapper\">\n						\n						<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("firstImage.content")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n						");
  stack1 = helpers['if'].call(depth0, "sold", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						\n						<div class=\"info\">		\n					 	 	<div class=\"title\"> ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					 	 		<div class=\"price\"> $");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>  \n					 	 	</div>\n						</div>\n\n					</div>\n				</div>\n		 	</li>\n		 	");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n							<div class=\"sold\">Sold</div>\n						");
  }

  data.buffer.push("<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n	    	<div class=\"row\">\n		    	<div class=\"col-md-12 haul-profile-header haul-font\">\n\n\n					<div class=\"media\">\n					  <a class=\"pull-left\" href=\"#\"> \n					  	<div class=\"profile-circular-mask\">\n					    	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n					    </div>\n					  </a>\n					  <div class=\"media-body\">\n					     	<h1 class=\"media-heading\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n	    					<h3>\n	    						<button class=\"btn btn-primary\">follow</button>\n	    						<span class=\"label\">175 Followers - Following 15</span>\n	    					</h3>\n	    					\n					  </div>\n					</div> \n\n\n		    	</div>\n		    </div>\n		</div>\n	</div>\n\n</div>	\n\n\n	<div class=\"haul-grid\">\n		<ul>      \n	    ");
  stack1 = helpers.each.call(depth0, "products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</ul>\n	</div> \n\n");
  return buffer;
  
});Ember.TEMPLATES['products/new'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});Ember.TEMPLATES['products/product'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	  		<div class=\"profile-small-circular-mask\">\n				<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n		 	</div>\n		 	");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n									<button type=\"button\" class=\"btn btn-default btn-lg\" ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Comment on This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n									  <span class=\"glyphicon glyphicon-comment\"></span>\n									</button>\n									");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n\n \n	<ol class=\"breadcrumb haul-icon-support\">\n	  	<li >\n	  		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "products", "user", options) : helperMissing.call(depth0, "link-to", "products", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</li>\n	  <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n	</ol>\n\n\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n			<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n		</div>\n	</div>\n\n\n	<div class=\"row\">\n		<div class=\"col-md-6\">\n\n			");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Haul.CarouselView", {hash:{
    'contentBinding': ("content.images")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n \n		</div>\n\n		<div class=\"col-md-6\">\n\n			<div class=\"row haul-buy-card\">\n\n				<div class=\"col-md-12\">\n					\n					<div class=\"row button-bar\">\n						\n						<div class=\"col-md-4\">\n							<span class=\"lead haul-price\">$");
  stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n							<button type=\"button\" class=\"btn btn-primary btn-lg\">BUY</button>\n						</div>\n\n						<div class=\"col-md-8\">\n\n							<div class=\"row\">\n								<div class=\"col-md-12 text-right\">\n									\n\n									<button type=\"button\" class=\"btn btn-default btn-lg\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "likeProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Like This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n									  <span class=\"glyphicon glyphicon-heart\"></span>\n									</button>	\n\n									<button type=\"button\" class=\"btn btn-default btn-lg\" { action 'shareProduct'}} ");
  data.buffer.push(escapeExpression((helper = helpers['bs-bind-tooltip'] || (depth0 && depth0['bs-bind-tooltip']),options={hash:{
    'content': ("Share This!")
  },hashTypes:{'content': "STRING"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-bind-tooltip", options))));
  data.buffer.push(">\n									  <span class=\"glyphicon glyphicon-share\"></span>\n									</button>							\n\n									");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product.comments", "", options) : helperMissing.call(depth0, "link-to", "product.comments", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n							\n									<div class=\"haul-counts\">\n									<div class=\"row\">\n										<div class=\"col-md-12\"><small><strong>12</strong> people like this</small></div>\n									</div>	\n									<div class=\"row\">\n										<div class=\"col-md-12\"><small><strong>");
  stack1 = helpers._triageMustache.call(depth0, "commentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> comments</small></div>\n									</div>\n									</div>\n\n								</div>\n							</div> \n						</div> \n					</div>\n\n					<div class=\"row\">\n						<div class=\"col-md-12\">\n							\n\n							<span class=\"haul-font\"><strong>From The Seller:</strong></span>\n							\n							<div class=\"media\">\n\n								<div class=\"pull-left\">\n\n									<div class=\"profile-small-circular-mask\">\n		    							<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.picture")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> \n		    						</div>\n		    						<br/>\n		    						");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n	    						</div>\n	    					\n		    					 <div class=\"media-body\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n		    				</div> \n						</div>\n					</div>\n				</div>\n			</div>\n		</div> \n	</div>\n\n\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n \n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['products/products'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "outlet", "header", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "main", options) : helperMissing.call(depth0, "outlet", "main", options))));
  data.buffer.push("\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "outlet", "footer", options))));
  return buffer;
  
});Ember.TEMPLATES['search'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n\n\n\n	<div class=\"row\">\n	 	<div class=\"col-md-12\">\n	    	<h1>Search</h1>\n	    </div> \n	</div>\n\n\n\n	<div class=\"row\">\n	    \n	    \n	</div>\n</div>");
  
});