(function() {
    'use strict';

    angular
        .module('rrsApp')
        .service('loginService', loginService);

    loginService.$inject = ['$q', '$http'];

    function loginService($q, $http) {
        var loginServiceVm = this;


        loginServiceVm.validateUser = validateUser;
        loginServiceVm.logoutUser = logoutUser;

        function validateUser(loginData) {

            var defer = $q.defer();

            $http
                .post('http://localhost:8080/RRSRestApp/api/authentication/login', loginData)
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


        function logoutUser(userCredentials) {

            var defer = $q.defer();

            $http
                .put('http://localhost:8080/RRSRestApp/api/authentication/logout', userCredentials)
                .then(successFn, errorFn);

            function successFn(response) {
                console.log(response.data);
                defer.resolve(response.data);
            }

            function errorFn(error) {
                console.log(error.statusText);
                defer.reject(error.statusText);
            }

            return defer.promise;
        }

    }



})();