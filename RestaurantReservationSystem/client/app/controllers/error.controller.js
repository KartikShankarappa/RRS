(function(){

    angular
        .module('rrsApp')
        .controller('ErrorController', ErrorController);

    function ErrorController() {
        console.log("Inside Error Controller");
    }

}());