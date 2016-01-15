(function () {
	'use strict';

	var app = angular
				.module('rrsApp', ['ngRoute', "xeditable", 'ngAnimate', 'ui.bootstrap', 'angularUtils.directives.dirPagination'])
				.config(moduleConfig);

	app.run(function($rootScope, $location, editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default' ---  for xeditable
	});

	moduleConfig.$inject = ['$routeProvider'];

	function moduleConfig ($routeProvider, $rootScope, $location) {

		$routeProvider
			.when('/home', {
				templateUrl: 'app/templates/home.tmpl.html',
				controller: "HomeController", 
				controllerAs: 'homeVm'
			})
			.when('/menu', {
				templateUrl: 'app/templates/menu.tmpl.html',
				controller: "MenuController", 
				controllerAs: 'menuVm'
			})
			.when('/reservation', {
				templateUrl: 'app/templates/reservation.tmpl.html',
				controller: "ReservationController", 
				controllerAs: 'reservationVm'
			})
			.when('/manageReservation', {
				templateUrl: 'app/templates/manageReservation.tmpl.html',
				controller: "ManageReservationController", 
				controllerAs: 'manageReservationVm'
			})
			.when('/events', {
				templateUrl: 'app/templates/events.tmpl.html',
				controller: "EventsController", 
				controllerAs: 'eventsVm'
			})
			.when('/contact_us', {
				templateUrl: 'app/templates/contact_us.tmpl.html',
				controller: "ContactUsController", 
				controllerAs: 'contactUsVm'
			})
			.when('/login', {
				templateUrl: 'app/templates/login.tmpl.html',
				controller: "LoginController", 
				controllerAs: 'loginVm'
			})
			.when('/confirmation', {
				templateUrl: 'app/templates/confirmation.tmpl.html',
				controller: "ConfirmationController",
				controllerAs: 'confirmationVm'
			})
			.when('/error', {
				templateUrl: 'app/templates/error.tmpl.html',
				controller: "ErrorController",
				controllerAs: 'errorVm'
			})
			.when('/login', {
				templateUrl: 'app/templates/login.tmpl.html',
				controller: "LoginController",
				controllerAs: 'loginVm'
			})
			.when('/adminAccess', {
				templateUrl: 'app/templates/adminAccess.tmpl.html',
				resolve:{
					"check":function($rootScope, $location) {
						if($rootScope.username == null) {
							$location.path('/login');
						}
					}
				},
				controller: "AdminAccessController",
				controllerAs: 'adminAccessVm'

			})
			//.when('/adminAccess/profile', {
			//	templateUrl: 'app/templates/profile.tmpl.html',
			//	controller: "ProfileController",
			//	controllerAs: 'profileVm'
			//})
			.when('/adminAccess/adminReservations', {
				templateUrl: 'app/templates/adminReservations.tmpl.html',
				resolve:{
					"check":function($rootScope, $location) {
						if($rootScope.username == null) {
							$location.path('/login');
						}
					}
				},
				controller: "AdminReservationsController",
				controllerAs: 'adminReservationsVm'
			})
			.when('/adminAccess/customerDatabase', {
				templateUrl: 'app/templates/customerDatabase.tmpl.html',
				resolve:{
					"check":function($rootScope, $location) {
						if($rootScope.username == null) {
							$location.path('/login');
						}
					}
				},
				controller: "CustomerDatabaseController",
				controllerAs: 'customerDatabaseVm'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}


})();