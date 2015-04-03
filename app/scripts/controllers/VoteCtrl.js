(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('VoteCtrl', function ($scope, Data, $location, $http, $mdDialog) {
      $scope.viewport = Data.viewport;

      $scope.confirmText = 'Uploading';
      $scope.confirmNext = function () {};

      $scope.confirm = function () {

        // Request server
        $http.post(Data.url.vote, {
          login: Data.login,
          form: Data.form
        })
          .success(function (response) {
            if (response.ok) {

              // Submitted Alert
              $mdDialog.show(
                $mdDialog.alert()
                  .title('Submitted Title')
                  .content('Submitted Content')
                  .ok('Ahem')
              )
                .then(function () {
                  Data.login.isLoggedIn = false;
                  $scope.confirmText = 'Exit';
                  $scope.confirmNext = function () {
                    $location.url('/login');
                  };
                });
            } else {

              // Unknown Error

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Unknown Title')
                  .content('Unknown Content')
                  .ok('Lemme Retry')
              )
                .then(function () {
                  Data.login.isLoggedIn = false;
                  $location.url('/login')
                });
            }
          })
          .error(function () {

            // Error Occurred

            $mdDialog.show(
              $mdDialog.alert()
                .title('Error Title')
                .content('Error Content')
                .ok('Lemme Retry')
            );
            $scope.confirmText = 'Retry';
            $scope.confirmNext = function () {
              $scope.confirm();
            };
          });
      };

      if(!Data.login.isLoggedIn){
        $location.url('/login');
      }

      $scope.confirm();
    });

})();