/*global Products, Ember */
(function () {
    'use strict';



// Haul.initializer({
//   name: 'easyForm',
//   initialize: function() {

//     Ember.EasyForm.Input.reopen({
//       errorsChanged: function() {
//         this.set('hasFocusedOut', true);
//         this.showValidationError();
//       },
//       classNameBindings: ['wrapperConfig.inputClass', 'wrapperErrorClass'],
//       didInsertElement: function() {
//         this.addObserver('context.errors.' + this.property + '.@each', this, 'errorsChanged');
//       }
//     });

//     Ember.EasyForm.Error.reopen({
//       errorText: function() {
//         return this.get('errors.firstObject');
//       }.property('errors.firstObject').cacheable(),
//       updateParentView: function() {
//         var parentView = this.get('parentView');
//         if(this.get('errors.length') > 0) {
//           parentView.set('wrapperErrorClass', 'has-error');
//         }else{
//           parentView.set('wrapperErrorClass', false);
//         }
//       }.observes('errors.firstObject')
//     });

//     Ember.EasyForm.Submit.reopen({
//       disabled: function() {
//         return this.get('formForModel.disableSubmit');
//       }.property('formForModel.disableSubmit')
//     });

//     //-- Bootstrap 3 Class Names --------------------------------------------
//     //-- https://github.com/dockyard/ember-easyForm/issues/47
//     Ember.TextSupport.reopen({
//       classNames: ['form-control']
//     });
//     // And add the same classes to Select inputs
//     Ember.Select.reopen({
//       classNames: ['form-control']
//     });

//     Ember.EasyForm.Config.registerWrapper('bs3-wrapper', {
//       inputTemplate: 'form-fields/input',

//       labelClass: 'control-label',
//       inputClass: 'form-group',
//       buttonClass: 'btn btn-primary',
//       fieldErrorClass: 'has-error',
//       errorClass: 'help-block'
//     });

//   }
// });

    Ember.EasyForm.Config.registerWrapper('bs3-wrapper', {
      inputTemplate: 'form-fields/input',

      labelClass: 'control-label',
      inputClass: 'form-group',
      buttonClass: 'btn btn-primary',
      fieldErrorClass: 'has-error',
      errorClass: 'help-block'
    });


    
    Haul.BaseView = Ember.View.extend();

    Haul.ProductsView = Haul.BaseView.extend({
        
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

    //Views
    Haul.ProductsIndexView = Ember.View.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

    Haul.ProductsProductView = Ember.View.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    }); 

    
})();
