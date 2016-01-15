(function () {
    'use strict';

    angular
        .module('rrsApp')
        .controller('CustomerDatabaseController', CustomerDatabaseController);

    CustomerDatabaseController.$inject = ['adminAccessService', '$scope'];

    function CustomerDatabaseController(adminAccessService, $scope) {

        var customerDatabaseVm = this;

        console.log("Inside Customer Database Controller");

        customerDatabaseVm.getAllCustomers = getAllCustomers;


        function getAllCustomers() {

            adminAccessService.findAllCustomers()
                .then(successFn, errorFn);

            function successFn(response) {
                customerDatabaseVm.customerList = response;
                console.log("List of all the customers is: ");
                console.log(customerDatabaseVm.customerList);
            }

            function errorFn(error) {
                console.log("Error in retrieving the customers list");
            }
        }


        $scope.sort = function(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }

    }
})();