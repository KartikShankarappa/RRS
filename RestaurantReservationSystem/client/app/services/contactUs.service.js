(function(){
    'use strict';

    angular
        .module('rrsApp')
        .service('contactUsService', contactUsService);

    contactUsService.$inject = ['$q', '$http'];

    function contactUsService($q, $http){

        var contactUsVm = this;

        contactUsVm.getContactDetails = getContactDetails;

        function getContactDetails(){

            var defer = $q.defer();

            $http
                .get('http://localhost:8080/RRSRestApp/api/contact_us')
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
    }

})();