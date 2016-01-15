(function() {
    'use strict';

    angular
        .module('rrsApp')
        .service('reservationService', reservationService);

    reservationService.$inject = ['$q', '$http', '$rootScope'];

    function reservationService($q, $http, $rootScope) {
        var reservationServiceVm = this;

        reservationServiceVm.getReservationById = getReservationById;
        reservationServiceVm.makeReservation = makeReservation;
        reservationServiceVm.editReservationById = editReservationById;
        reservationServiceVm.cancelReservationById = cancelReservationById;
        reservationServiceVm.findAllReservations = findAllReservations;



        function getReservationById(id) {

            var defer = $q.defer();

            $http
                .get('http://localhost:8080/RRSRestApp/api/reservations/' + id)
                .then(successFn,errorFn);

            function successFn(response) {
                console.log(response.data);
                defer.resolve(response.data);
            }

            function errorFn(error){
                console.log(error.statusText);
                defer.reject(error.statusText);
            }

            return defer.promise;

        }


        function makeReservation(reservationObject) {

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/RRSRestApp/api/reservations/makeReservation', reservationObject)
                .then(successFn, errorFn);

            function successFn(response){
                console.log("Reservation made succesfully");
                console.log("Should redirect to the confirmation page.");
                console.log(response.data);
                defer.resolve(response.data);
            }

            function errorFn(error) {
                console.log("Should be redirected to the error page.");
                defer.reject(error.statusText);
            }

            return defer.promise;

        }

        function editReservationById(reservationObject) {

            var defer = $q.defer();

            $http
                .put('http://localhost:8080/RRSRestApp/api/reservations/updateReservation', reservationObject)
                .then(successFn, errorFn);

            function successFn(response) {
                console.log("Reservation Updated Successfully");
                defer.resolve(response.data);
            }

            function errorFn(error) {
                console.log("Reservation did not update successfully");
                defer.reject(error.statusText);
            }

            return defer.promise;

        }


        function cancelReservationById(reservationObject) {

            var defer = $q.defer();

            $http.put('http://localhost:8080/RRSRestApp/api/reservations/cancelReservation/' + reservationObject.confirmationNumber, reservationObject)
                .then(successFn, errorFn);

            function successFn(response) {
                console.log("Reservation successfully deleted");
                defer.resolve(response.data);
            }

            function errorFn(error) {
                console.log("Reservation did not get cancelled");
                defer.reject(error.statusText);
            }

            return defer.promise;
        }



        function findAllReservations() {

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/RRSRestApp/api/admin/reservations/' + $rootScope.username + '/' + $rootScope.token)
                .then(successFn, errorFn);

            function successFn(response) {

                console.log("All the reservations are fetched succesfully");
                defer.resolve(response.data);
            }

            function errorFn(error) {
                console.log("Error in retrieving the list of reservations");
                defer.reject(error.statusText);
            }

            return defer.promise;
        }

    }
})();