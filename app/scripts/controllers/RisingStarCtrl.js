(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('RisingStarCtrl', function ($scope, Data, $location, $mdDialog) {
      $scope.viewport = Data.viewport;
      $scope.data = Data.form;

      $scope.confirm = function (option) {
        Data.form.risingStar = option;
      };

      $scope.select = function (option, event) {

        var confirm = $mdDialog.confirm()
          .title(option)
          .content('Content')
          .ok('Vote')
          .cancel('Close')
          .targetEvent(event);
        $mdDialog.show(confirm).then(function () {
          $scope.confirm(option);
        }, function () {});

      };

      $scope.prev = function () {
        $location.url('/form');
      };

      $scope.next = function () {
        $location.url('/sports-icon');
      };

      $scope.sectionFilled = function () {
        if (Data.form.risingStar)
          return true;
      };

      if (!Data.login.isLoggedIn) {
        $location.url('/login');
      }
    });

})();