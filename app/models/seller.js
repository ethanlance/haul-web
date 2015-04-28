import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
     user_id: DS.attr('string'),
     firstname: DS.attr('string'),
     lastname: DS.attr('string'),
     email: DS.attr('string'),
     phone: DS.attr('string'),
     
     dob_formated: DS.attr('string'),
     dob: DS.attr('string'),
     ssn: DS.attr('string'),
     
     address: DS.attr('string'),
     city: DS.attr('string'),
     state: DS.attr('string'),
     postal_code: DS.attr('string'),
     
     routing_number: DS.attr('string'),
     account_number: DS.attr('string'),
     tos_accepted: DS.attr('boolean'),
     
     business_legal_name: DS.attr('string'),
     business_name: DS.attr('string'),
     business_tax_id: DS.attr('string'),
     business_address: DS.attr('string'),
     business_city: DS.attr('string'),
     business_state: DS.attr('string'),
     business_postal_code: DS.attr('string'),

     validations: { 
          firstname: {
               presence: true
          },
          lastname: {
               presence: true
          },
          email: {
               presence: true
          },
          phone: {
               presence: true
          },

          dob: {
               presence: true
          },


          ssn: {
               numericality: {
                    onlyInteger:true,
               },
               length: 4,
          },

          address: {
               presence: true
          },

          city: {
               presence: true
          },

          state: {
               presence: true
          },

          postal_code: {
               presence: true
          },

          routing_number: {
               presence: true
          },

          account_number: {
               presence: true
          },

          tos_accepted: {
               presence: true
          },
     }
});