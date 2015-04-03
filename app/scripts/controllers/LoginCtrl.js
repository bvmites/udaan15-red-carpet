(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('LoginCtrl', function ($scope, Data, $http, $location, $mdDialog) {
      $scope.data = Data.login;
      $scope.viewport = Data.viewport;
      $scope.login = function () {

        // Request Server
        $http.post(Data.url.login, {
          enroll: Data.login.enroll,
          key: Data.login.key
        })
          .success(function (response) {
            if (response.ok) {
              Data.login.isLoggedIn = true;
              $location.url('/form');
            } else if(typeof response.error != 'undefined' && response.error.indexOf('credentials') >= 0) {

              // Wrong Credentials

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Wrong Title')
                  .content('Wrong Content')
                  .ok('Lemme Retry')
              )
                .then(function () {
                  Data.login.key = '';
                });
            } else if (typeof response.error != 'undefined' && response.error.indexOf('voted') >= 0) {

              // Already Voted

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Voted Title')
                  .content('Voted Content')
                  .ok('My Bad')
              )
                .then(function () {
                  Data.login.enroll = '';
                  Data.login.key = '';
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
                  Data.login.enroll = '';
                  Data.login.key = '';
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
          });
      };

      $scope.showRegistration = function(event) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('Registration Title')
            .content('Registration Content')
            .ok('Got it!')
            .targetEvent(event)
        );
      };

      if(Data.login.isLoggedIn){
        $location.url('/form');
      }

    });

})();