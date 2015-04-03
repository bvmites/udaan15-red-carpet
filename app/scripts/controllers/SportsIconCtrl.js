(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('SportsIconCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.select = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.sportsIcon = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
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