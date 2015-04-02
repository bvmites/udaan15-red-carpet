(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('StyleIconCtrl', function ($scope, Data, $location, $mdDialog) {
      $scope.viewport = Data.viewport;
      $scope.data = Data.form;

      $scope.confirmMale = function (option) {
        Data.form.styleIcon.male = option;
      };

      $scope.confirmFemale = function (option) {
        Data.form.styleIcon.female = option;
      };

      $scope.selectMale = function (option, event) {

        var confirm = $mdDialog.confirm()
          .title(option)
          .content('Content')
          .ok('Vote')
          .cancel('Close')
          .targetEvent(event);
        $mdDialog.show(confirm).then(function () {
          $scope.confirmMale(option);
        }, function () {});

      };

      $scope.selectFemale = function (option, event) {

        var confirm = $mdDialog.confirm()
          .title(option)
          .content('Content')
          .ok('Vote')
          .cancel('Close')
          .targetEvent(event);
        $mdDialog.show(confirm).then(function () {
          $scope.confirmFemale(option);
        }, function () {});

      };

      $scope.prev = function () {
        $location.url('/face-of-the-year');
      };

      $scope.next = function () {
        $location.url('/persona');
      };

      $scope.sectionFilled = function () {
        if (Data.form.styleIcon.male && Data.form.styleIcon.female)
          return true;
      };

      if (!Data.login.isLoggedIn) {
        $location.url('/login');
      }
    });

})();