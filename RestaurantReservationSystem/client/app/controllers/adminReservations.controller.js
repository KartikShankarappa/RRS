(function () {
    'use strict';

    angular
        .module('rrsApp')
        .controller('AdminReservationsController', AdminReservationsController);

    AdminReservationsController.$inject = ['reservationService', '$location', '$scope'];

    function AdminReservationsController(reservationService, $location, $scope) {

        var adminReservationsVm = this;
        console.log("Inside Admin Reservations Controller");
        //adminReservationsVm.reservationsList = {};

        adminReservationsVm.getAllReservations = getAllReservations;

        function getAllReservations() {

            reservationService.findAllReservations()
                .then(successFn, errorFn);

            function successFn(response) {
                adminReservationsVm.reservationsList = response;
                console.log("List of all the reservations is: ");
                console.log(adminReservationsVm.reservationsList);
            }

            function errorFn(error) {
                console.log("Error in retrieveing the reservations");
            }

        }


        $scope.sort = function(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }


    }
})();