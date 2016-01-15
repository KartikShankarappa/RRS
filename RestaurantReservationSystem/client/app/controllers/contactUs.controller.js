(function(){
    'use strict';

    angular
        .module('rrsApp')
        .controller("ContactUsController", ContactUsController);

    ContactUsController.$inject = ['contactUsService'];

    function ContactUsController(contactUsService) {
        var contactUsVm = this;
        console.log("Inside Contact Us Controller");


        contactUsService
            .getContactDetails()
            .then(successFn, errorFn);

        function successFn(response){
            //console.log("Restaurant Details: " + response);
            contactUsVm.details = response;
        }

        function errorFn(error) {
            console.log(error);
            console.log("Error in fetching Details");
        }

    }
})();