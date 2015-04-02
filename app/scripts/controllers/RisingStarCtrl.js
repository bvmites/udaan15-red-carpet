(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('RisingStarCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;
      $scope.data = Data.form;

      $scope.select = function (option) {
        Data.form.risingStar = option;
      };

      $scope.prev = function () {
        $location.url('/form');
      };

      $scope.next = function () {
        $location.url('/sports-icon');
      };

      if(!Data.login.isLoggedIn){
        $location.url('/login');
      }
    });

})();