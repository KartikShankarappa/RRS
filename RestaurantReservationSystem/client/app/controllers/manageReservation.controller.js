(function () {
    'use strict';

    angular
        .module('rrsApp')
        .controller('ManageReservationController', ManageReservationController);


    ManageReservationController.$inject = ['reservationService', '$location','$rootScope', '$scope', '$uibModal'];

    function ManageReservationController(reservationService, $location, $rootScope, $scope, $uibModal) {
        var manageReservationVm = this;
        manageReservationVm.show = false;
        manageReservationVm.noRecordsShow = false;
        manageReservationVm.updateSuccesful = false;
        manageReservationVm.cancelSuccessful = false;

        manageReservationVm.reservationData = {};


        manageReservationVm.findReservationById = findReservationById;


        $rootScope.cancelReservation = cancelReservation;
        $rootScope.editReservation = editReservation;



        $scope.modalCancel = function (size) {

            var modalInstance = $uibModal.open({
                templateUrl: 'cancelReservation.html',
                controller: 'CancelCtrl'
            });

        };

        $scope.modalUpdate = function (size) {

            var modalInstance = $uibModal.open({
                templateUrl: 'updateReservation.html',
                controller: 'UpdateCtrl'
            });

        };



        function findReservationById() {
            reservationService.getReservationById(manageReservationVm.id)
                .then(successFn, errorFn);

            function successFn(response) {


                manageReservationVm.reservationData = response;

                $scope.data = {
                    confirmationNumber: manageReservationVm.reservationData.confirmationNumber,
                    tableNumber: manageReservationVm.reservationData.tableNumber,
                    firstName: manageReservationVm.reservationData.firstName,
                    lastName: manageReservationVm.reservationData.lastName,
                    emailId: manageReservationVm.reservationData.emailId,
                    phoneNumber: manageReservationVm.reservationData.phoneNumber,
                    partySize: manageReservationVm.reservationData.partySize,
                    date: manageReservationVm.reservationData.date,
                    time: manageReservationVm.reservationData.time,
                    reservationStatus: manageReservationVm.reservationData.reservationStatus
                };
                console.log($scope.data);
                manageReservationVm.noRecordsShow = false;
                manageReservationVm.updateSuccesful = false;
                manageReservationVm.show = true;
                console.log(response);
            }

            function errorFn(error) {
                manageReservationVm.response = null;
                $scope.response = null;
                manageReservationVm.show = false;
                manageReservationVm.noRecordsShow = true;
                manageReservationVm.cancelSuccessful = false;
                console.log(error);
            }
        }


        function editReservation(){

            console.log($scope.data);
            reservationService.editReservationById($scope.data)
                .then(successFn, errorFn);

            function successFn(response) {
                console.log(response);
                manageReservationVm.updateSuccesful = true;
                manageReservationVm.show = false;


            }
            function errorFn(error) {
                $location.path('/error');
            }
        }


        function cancelReservation() {
            console.log(manageReservationVm.reservationData.confirmationNumber);

            reservationService.cancelReservationById(manageReservationVm.reservationData)
                .then(successFn, errorFn);

            function successFn(response) {
                manageReservationVm.show = false;
                manageReservationVm.updateSuccesful = false;
                manageReservationVm.cancelSuccessful = true;
            }

            function errorFn() {
                $location.path('/error');
            }
        }

    }


    angular
        .module('rrsApp')
        .controller('CancelCtrl', CancelCtrl);

    CancelCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance'];

    function CancelCtrl($scope, $rootScope, $uibModalInstance) {

        $scope.ok = function () {
            $rootScope.cancelReservation();
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }



    angular
        .module('rrsApp')
        .controller('UpdateCtrl', UpdateCtrl);

    UpdateCtrl.$inject = ['$scope', '$rootScope', '$uibModalInstance'];

    function UpdateCtrl($scope, $rootScope, $uibModalInstance) {

        $scope.ok = function () {
            $rootScope.editReservation();
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }



})();