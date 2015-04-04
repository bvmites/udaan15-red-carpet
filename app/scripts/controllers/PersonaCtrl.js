(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('PersonaCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.selectMale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.persona.male = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.selectFemale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.persona.female = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/artist');
      };

      $scope.sectionFilled = function () {
        if (Data.form.persona.male && Data.form.persona.female)
          return true;
      };

      $location.url(Data.properView());
    });

})();