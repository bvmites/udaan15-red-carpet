(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('FaceCtrl', function ($scope, Data, $location, $mdDialog) {
      $scope.viewport = Data.viewport;

      $scope.confirmMale = function (option) {
        Data.form.face.male = option;
      };

      $scope.confirmFemale = function (option) {
        Data.form.face.female = option;
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

      $scope.next = function () {
        $location.url('/style-icon');
      };

      $scope.sectionFilled = function () {
        if (Data.form.face.male && Data.form.face.female)
          return true;
      };

      if (!Data.login.isLoggedIn) {
        $location.url('/login');
      }
    });

})();