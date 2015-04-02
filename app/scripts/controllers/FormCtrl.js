(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('FormCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.next = function () {
        $location.url('/rising-star');
      };

      if(!Data.login.isLoggedIn){
        $location.url('/login');
      }
    });

})();