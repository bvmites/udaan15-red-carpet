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
        .when('/form', {
          templateUrl: 'views/form.html',
          controller: 'FormCtrl'
        })
        .when('/rising-star', {
          templateUrl: 'views/rising-star.html',
          controller: 'RisingStarCtrl'
        })
        .otherwise({
          redirectTo: '/login'
        })
    });

})();