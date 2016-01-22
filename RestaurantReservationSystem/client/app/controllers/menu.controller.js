(function() {
    'use strict';

    angular
    .module('rrsApp')
    .controller('MenuController', MenuController);

    MenuController.$inject = [];

    function MenuController(){
        var menu = this;
        console.log(menu);
    }
})();