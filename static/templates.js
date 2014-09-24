Ember.TEMPLATES['_alert'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</div>");
  
});Ember.TEMPLATES['auth'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['product'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Products");
  }

  data.buffer.push("\n\n<ol class=\"breadcrumb\">\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ol>\n\n\n<div class=\"row\">\n	<div class=\"col-md-6\">\n		<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n	</div>\n	<div class=\"col-md-2\"></div>\n	<div class=\"col-md-4 text-right\">\n		<button class=\"btn btn-warning\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Preview</button>\n	    <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</button>\n	    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Save</button>\n	    \n	</div>  \n</div>\n\n\n<div class=\"row\">\n	<div class=\"col-md-5\">\n		<div class=\"row\">\n			<div class=\"col-md-12\">\n				<img class=\"img-thumbnail\" data-src=\"holder.js/100%x180\" alt=\"...\">\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-12\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\" data-src=\"holder.js/50x50\" alt=\"...\">\n			</div>\n		</div>\n	</div>\n\n	<div class=\"col-md-7\">\n\n		<div class=\"form-group\">\n			<label>Title:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			<label>Description:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'name': ("description"),
    'cols': ("80"),
    'rows': ("6"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'name': "STRING",'cols': "STRING",'rows': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'name': depth0,'cols': depth0,'rows': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n\n\n			<label>Price:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("price"),
    'value': ("price"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			<label>Quantity:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			<label>Title:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			\n\n\n		</div>\n	</div>\n	<div class=\"col-md-4\">\n		<div class=\"well \">Well Meta</div>\n	</div>\n</div>\n\n 	\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['productcreate'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n 	<div class=\"col-md-8\">\n    	<h1>Create New Product</h1>\n    </div>\n    <div class=\"col-md-4\">\n\n	</div>\n</div>\n\n\n\n<div class=\"row\">\n	<div class=\"col-md-6\">\n\n		<div class=\"form-group\">\n			\n			<label>Title:</label>\n			<form class=\"form-horizontal\" role=\"form\">\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("newProduct"),
    'type': ("text"),
    'value': ("newProduct"),
    'placeholder': ("Add new product title"),
    'class': ("form-control")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			<button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Save</button>\n			</form>\n\n		</div>	\n	</div>\n	<div class=\"col-md-6\">\n		\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['products'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n	    <button class=\"btn btn-default\">Create New</button>\n	    ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	\n	  <div class=\"col-xs-6 col-md-3\">\n	    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("thumbnail")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	    <p> ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n	  </div>\n		  \n      \n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n	      <img data-src=\"holder.js/100%x180\" alt=\"...\">\n	    ");
  }

function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n\n\n\n\n<div class=\"row\">\n 	<div class=\"col-md-8\">\n    	<h1>Products</h1>\n    </div>\n    <div class=\"col-md-4 text-right \">\n    \n\n	    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "productcreate", options) : helperMissing.call(depth0, "link-to", "productcreate", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>\n\n\n\n<div class=\"row\">\n    \n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['_alert'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</div>");
  
});Ember.TEMPLATES['auth'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['auth/confirmation'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		    <div class=\"alert\">Invalid username or password.</div>\n		  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		    <div class=\"alert alert-info\">The request seems to be taking more time than usual, please wait.</div>\n		  ");
  }

  data.buffer.push("\n<div class=\"row center-block\">\n	<div class=\"col-md-4\"></div>\n	<div class=\"col-md-4 \">\n 		\n \n\n		<form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n		  	\n			<div class=\"form-group\">\n				<h2 class=\"form-signin-heading\">Welcome Back</h2>\n				<p>We just need a couple more things!</p>\n			</div>\n		  \n\n\n\n		  ");
  stack1 = helpers['if'].call(depth0, "loginFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		  \n		  ");
  stack1 = helpers['if'].call(depth0, "isSlowConnection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n \n	 		<div class=\"form-group\">	\n	      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("Password")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div> \n\n\n \n	 		<div class=\"form-group\">	\n	      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("First name")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div> \n\n\n \n	 		<div class=\"form-group\">	\n	      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Last name")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div> \n\n\n			<div class=\"form-group\">\n		  		<button type=\"submit\" class=\"btn btn-primary btn-block\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'disabled': ("isProcessing")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Complete</button>\n		  	</div>\n \n\n		</form> 		\n\n	</div>\n	<div class=\"col-md-4\"></div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		    <div class=\"alert\">Invalid username or password.</div>\n		  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		    <div class=\"alert alert-info\">The request seems to be taking more time than usual, please wait.</div>\n		  ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Forgot Password?");
  }

  data.buffer.push("\n\n\n<div class=\"row center-block\">\n	<div class=\"col-md-4\"></div>\n	<div class=\"col-md-4 \">\n\n \n		<form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n		  	\n		  	<div class=\"form-group\">\n				<h2 class=\"form-signin-heading\">Please sign in</h2>\n			</div>\n		  \n\n\n\n		  ");
  stack1 = helpers['if'].call(depth0, "loginFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		  \n		  ");
  stack1 = helpers['if'].call(depth0, "isSlowConnection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n		  	<div class=\"form-group\">\n	      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Your Email Address")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	      	</div>\n\n	 		<div class=\"form-group\">	\n	      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("password"),
    'class': ("form-control"),
    'placeholder': ("Password")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div> \n\n			<div class=\"form-group\">\n		  		<button type=\"submit\" class=\"btn btn-primary btn-block\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'disabled': ("isProcessing")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">Sign In</button>\n		  	</div>\n\n		  	<div class=\"text-right\">\n		  		<span class=\"muted\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n		  	</div>\n\n		</form> \n\n	</div>\n	<div class=\"col-md-4\"></div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/signup'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		    <div class=\"alert\">Invalid username or password.</div>\n		  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		    <div class=\"alert alert-info\">The request seems to be taking more time than usual, please wait.</div>\n		  ");
  }

  data.buffer.push("\n<div class=\"row center-block\">\n	<div class=\"col-md-4\"></div>\n	<div class=\"col-md-4 \">\n 		\n		\n\n		<form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n			<div class=\"form-group\">\n				<h2 class=\"form-signin-heading\">Register With Email</h2>\n			</div>\n\n		  ");
  stack1 = helpers['if'].call(depth0, "loginFailed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		  \n		  ");
  stack1 = helpers['if'].call(depth0, "isSlowConnection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n		  	<div class=\"form-group\"> \n	      		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Type your email address")
  },hashTypes:{'value': "ID",'type': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	      	</div> \n\n			<div class=\"form-group\">\n		  		<button type=\"submit\" class=\"btn btn-primary btn-block\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'disabled': ("isProcessing")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">request invite</button>\n		  	</div>\n		</form> \n\n	</div>\n	<div class=\"col-md-4\"></div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['layouts/layout_anon'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<body cz-shortcut-listen=\"true\">\n\n    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Haul</a>\n        </div>\n        <div class=\"navbar-collapse collapse\"> \n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  \n \n</body>");
  return buffer;
  
});Ember.TEMPLATES['layouts/layout_base'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Products");
  }

  data.buffer.push("\n  <div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n    \n      \n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        \n        \n        \n        <div class=\"logo-outer\">\n          <a>Haul</a>\n        </div>\n        \n\n\n      </div>\n\n       <div class=\"navbar-search collapse navbar-collapse\">\n        <form class=\"navbar-form\" role=\"search\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"search for a product\">\n            <span class=\"input-group-addon\">go</span>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"navbar-collapse collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          <li><a href=\"#\">Messages</a></li>\n\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Profile <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Settings</a></li>\n              <li><a href=\"#\">Account</a></li>\n              <li class=\"divider\"></li> \n              <li><a href=\"#\">Logout</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n\n      \n\n    \n  </div>  \n\n  <div class=\"container\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  
});Ember.TEMPLATES['product'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Products");
  }

  data.buffer.push("\n\n<ol class=\"breadcrumb\">\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ol>\n\n\n<div class=\"row\">\n	<div class=\"col-md-6\">\n		<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n	</div>\n	<div class=\"col-md-2\"></div>\n	<div class=\"col-md-4 text-right\">\n		<button class=\"btn btn-warning\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Preview</button>\n	    <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</button>\n	    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Save</button>\n	    \n	</div>  \n</div>\n\n\n<div class=\"row\">\n	<div class=\"col-md-5\">\n		<div class=\"row\">\n			<div class=\"col-md-12\">\n				<img class=\"img-thumbnail\" data-src=\"holder.js/100%x180\" alt=\"...\">\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-12\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\"  data-src=\"holder.js/50x50\" alt=\"...\">\n				<img class=\"img-thumbnail\" data-src=\"holder.js/50x50\" alt=\"...\">\n			</div>\n		</div>\n	</div>\n\n	<div class=\"col-md-7\">\n\n		<div class=\"form-group\">\n			<label>Title:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			<label>Description:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'name': ("description"),
    'cols': ("80"),
    'rows': ("6"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'name': "STRING",'cols': "STRING",'rows': "STRING",'class': "STRING"},hashContexts:{'value': depth0,'name': depth0,'cols': depth0,'rows': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n\n\n			<label>Price:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("price"),
    'value': ("price"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			<label>Quantity:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			<label>Title:</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("title"),
    'value': ("title"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n\n			\n\n\n		</div>\n	</div>\n	<div class=\"col-md-4\">\n		<div class=\"well \">Well Meta</div>\n	</div>\n</div>\n\n 	\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['productcreate'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n 	<div class=\"col-md-8\">\n    	<h1>Create New Product</h1>\n    </div>\n    <div class=\"col-md-4\">\n\n	</div>\n</div>\n\n\n\n<div class=\"row\">\n	<div class=\"col-md-6\">\n\n		<div class=\"form-group\">\n			\n			<label>Title:</label>\n			<form class=\"form-horizontal\" role=\"form\">\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("newProduct"),
    'type': ("text"),
    'value': ("newProduct"),
    'placeholder': ("Add new product title"),
    'class': ("form-control")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			<button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProduct", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Save</button>\n			</form>\n\n		</div>	\n	</div>\n	<div class=\"col-md-6\">\n		\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['products'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n	    <button class=\"btn btn-default\">Create New</button>\n	    ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	\n	  <div class=\"col-xs-6 col-md-3\">\n	    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("thumbnail")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	    <p> ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n	  </div>\n		  \n      \n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n	      <img data-src=\"holder.js/100%x180\" alt=\"...\">\n	    ");
  }

function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("\n\n\n\n\n<div class=\"row\">\n 	<div class=\"col-md-8\">\n    	<h1>Products</h1>\n    </div>\n    <div class=\"col-md-4 text-right \">\n    \n\n	    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "productcreate", options) : helperMissing.call(depth0, "link-to", "productcreate", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>\n\n\n\n<div class=\"row\">\n    \n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});