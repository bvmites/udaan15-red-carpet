(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('ArtistCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.selectMale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.artist.male = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.selectFemale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.artist.female = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/vote');
      };

      $scope.sectionFilled = function () {
        if (Data.form.artist.male && Data.form.artist.female)
          return true;
      };

      if (!Data.login.isLoggedIn) {
        $location.url('/login');
      }
    });

})();