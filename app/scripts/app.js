(function () {
  'use strict';

  angular.module('u15RCApp', [
    'ngRoute',
    'ngMaterial',
    'matchMedia'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .otherwise({
          redirectTo: '/login'
        })
    });

})();