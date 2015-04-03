(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('StyleIconCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.selectMale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.styleIcon.male = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.selectFemale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.styleIcon.female = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
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