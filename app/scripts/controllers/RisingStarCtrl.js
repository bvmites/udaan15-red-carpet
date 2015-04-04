(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('RisingStarCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.select = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.risingStar = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/sports-icon');
      };

      $scope.sectionFilled = function () {
        if (Data.form.risingStar)
          return true;
      };

      $location.url(Data.properView());
    });

})();