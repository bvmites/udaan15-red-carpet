(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('SportsIconCtrl', function ($scope, Data, $location, $mdDialog) {
      $scope.viewport = Data.viewport;
      $scope.data = Data.form;

      $scope.confirm = function (option) {
        Data.form.sportsIcon = option;
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
        $location.url('/rising-star');
      };

      $scope.next = function () {
        $location.url('/face-of-the-year');
      };

      $scope.sectionFilled = function () {
        if (Data.form.sportsIcon)
          return true;
      };

      if (!Data.login.isLoggedIn) {
        $location.url('/login');
      }
    });

})();