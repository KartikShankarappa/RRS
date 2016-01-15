(function () {
    'use strict';

    angular
        .module('rrsApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [];

    function ProfileController() {

        var profileVm = this;

        console.log("Inside Profile Controller");
    }
})();