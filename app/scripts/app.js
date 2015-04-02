(function () {
  'use strict';

  angular.module('u15RCApp', [
    'ngRoute',
    'ngMaterial'
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