(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('LoginCtrl', function ($scope, Data) {
      $scope.pageTitle = 'Login Page';
      $scope.data = Data.login;
    });

})();