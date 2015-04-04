(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('FaceCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.selectMale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.face.male = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.selectFemale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.face.female = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/style-icon');
      };

      $scope.sectionFilled = function () {
        if (Data.form.face.male && Data.form.face.female)
          return true;
      };

      $location.url(Data.properView());
    });

})();