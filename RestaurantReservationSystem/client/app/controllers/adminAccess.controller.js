(function () {
    'use strict';

    angular
        .module('rrsApp')
        .controller('AdminAccessController', AdminAccessController);

    AdminAccessController.$inject = ['adminAccessService', '$scope'];

    function AdminAccessController(adminAccessService, $scope) {

        var adminAccessVm = this;
        console.log("Inside Admin Access Controller");
        adminAccessVm.details = {};
        adminAccessVm.updateSuccessful = false;

        adminAccessVm.getRestaurantDetails = getRestaurantDetails;
        adminAccessVm.modifyRestaurantDetails = modifyRestaurantDetails;


        function getRestaurantDetails() {

            adminAccessService.findRestaurantDetails()
                .then(successFn, errorFn)

            function successFn(response) {
                adminAccessVm.restaurantDetails = response;
                //console.log("The restaurant Details is : " + adminAccessVm.restaurantDetails);
            }

            function errorFn(error) {
                console.log("Error in retrieving restaurant details")
            }


        }




        function modifyRestaurantDetails() {

            console.log("Inside Modify Restaurant Details function");
            console.log(adminAccessVm.restaurantDetails);

            adminAccessService.editRestaurantDetails(adminAccessVm.restaurantDetails)
                .then(successFn, errorFn);

            function successFn(response) {
                console.log("Restaurant Details Updated Successfully");
                adminAccessVm.updateSuccessful = true;
            }

            function errorFn(error) {
                console.log("Restaurant Details DID NOT Update Successfully");
                console.log(error);
            }

        }



    }
})();