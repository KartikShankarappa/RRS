(function() {
    'use strict';

    angular
        .module('rrsApp')
        .controller('ConfirmationController', ConfirmationController);

    ConfirmationController.$inject = ['sharedDataService'];

    function ConfirmationController(sharedDataService) {

        var confirmationVm = this;
        confirmationVm.status = {};
        confirmationVm.confirmationNumber = sharedDataService.confirmationNumber;
        confirmationVm.reservationStatus = sharedDataService.reservationStatus;

        if(confirmationVm.reservationStatus == "CONFIRMED") {
            confirmationVm.status = true;
        } else {
            confirmationVm.status = false;
        }

        console.log(confirmationVm.status);
        console.log("In confirmation controller");
    }
})();