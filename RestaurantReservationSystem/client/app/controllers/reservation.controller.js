(function() {
    'use strict';

    angular
        .module('rrsApp')
        .controller('ReservationController', ReservationController);

    ReservationController.$inject = ['$scope', 'reservationService', '$location', '$filter', 'sharedDataService'];

    function ReservationController($scope, reservationService, $location, $filter, sharedDataService) {
        var reservationVm = this;

        reservationVm.reservationDetails = {};
        console.log("Inside Reservation controller");



        reservationVm.today = function() {
            reservationVm.reservationDetails.date = new Date();
        };

        reservationVm.today();

        //// Disable weekend selection
        //reservationVm.disabled = function(date, mode) {
        //    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        //};


        reservationVm.toggleMin = function() {
            reservationVm.minDate = reservationVm.minDate ? null : new Date();
        };

        reservationVm.toggleMin();
        reservationVm.maxDate = new Date(2020, 5, 22);

        reservationVm.open = function($event) {
            reservationVm.status.opened = true;
        };

        reservationVm.setDate = function(year, month, day) {
            reservationVm.reservationDetails.date = new Date(year, month, day);
        };

        reservationVm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        reservationVm.format = 'yyyy-MM-dd';

        reservationVm.status = {
            opened: false
        };

        reservationVm.addReservation = addReservation;

        function addReservation() {

            reservationVm.reservationDetails.date = reservationVm.reservationDetails.date.toISOString().slice(0,10);
            reservationVm.reservationDetails.time = $filter('date')(reservationVm.timeHolder, "HH:mm:ss");
            console.log(reservationVm.reservationDetails.date);
            console.log(reservationVm.reservationDetails.time);

            reservationService
                .makeReservation(reservationVm.reservationDetails)
                .then(successFn, errorFn);

            function successFn(response) {
                console.log(response);
                reservationVm.response = response;
                sharedDataService.confirmationNumber = response.confirmationNumber;
                sharedDataService.reservationStatus = response.reservationStatus;
                console.log("Reservation Created");
                $location.path('/confirmation');
            }
            function errorFn(error) {
                console.log(error);
                console.log("Error in making reservation");
                $location.path('/error');
            }


        }

    }
})();