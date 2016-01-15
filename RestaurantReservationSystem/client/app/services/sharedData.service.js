(function() {
    'use strict';

    angular
        .module('rrsApp')
        .service('sharedDataService', sharedDataService);

    function sharedDataService(){
        var sharedDataVm = this;
        sharedDataVm.confirmationNumber = null;
        sharedDataVm.reservationStatus = null;
        sharedDataVm.updateSuccess = false;

        sharedDataVm.loginStatus = false;


    }
})();