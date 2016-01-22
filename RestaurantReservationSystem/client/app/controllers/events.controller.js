(function(){
    'use strict';

    angular
        .module('rrsApp')
        .controller("EventsController", EventsController);

    EventsController.$inject = [];

    function EventsController(){
        var eventsVm = this;

        console.log("Inside Events Controller");

    }
})();