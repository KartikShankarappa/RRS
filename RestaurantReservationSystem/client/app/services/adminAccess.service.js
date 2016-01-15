(function() {
    'use strict';

    angular
        .module('rrsApp')
        .service('adminAccessService', adminAccessService);

    adminAccessService.inject = ['$q', '$http', '$rootScope'];

    function adminAccessService($q, $http, $rootScope){
        var adminAccessServiceVm = this;
        adminAccessServiceVm.data = null;

        adminAccessServiceVm.findRestaurantDetails = findRestaurantDetails;
        adminAccessServiceVm.editRestaurantDetails = editRestaurantDetails;
        adminAccessServiceVm.findAllCustomers = findAllCustomers;



        function findRestaurantDetails() {

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/RRSRestApp/api/profile/'+ $rootScope.username + '/' + $rootScope.token)
                .then(successFn, errorFn);

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


        function editRestaurantDetails(restaurantObject){

            var defer = $q.defer();

            $http
                .put('http://localhost:8080/RRSRestApp/api/profile/'+ $rootScope.username + '/' + $rootScope.token, restaurantObject)
                .then(successFn, errorFn);

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


        function findAllCustomers() {

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/RRSRestApp/api/customer_database/' + $rootScope.username + '/' + $rootScope.token)
                .then(successFn, errorFn);

            function successFn(response) {

                console.log("All the customers are fetched succesfully");
                defer.resolve(response.data);
            }

            function errorFn(error) {
                console.log("Error in retrieving the list of customers");
                defer.reject(error.statusText);
            }

            return defer.promise;
        }


    }
})();