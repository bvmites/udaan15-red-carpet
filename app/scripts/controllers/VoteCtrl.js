(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('VoteCtrl', function ($scope, Data, $location, $http, $mdDialog) {
      $scope.viewport = Data.viewport;

      $scope.confirm = function () {

        $scope.mode = 'upload';

        // Request server
        $http.post(Data.url.vote, {
          login: {
            enroll: Data.login.enroll,
            key: Data.login.key
          },
          form: Data.form
        })
          .success(function (response) {
            if (response.ok) {

              $scope.mode = 'feedback';
              Data.login.hasVoted = true;

              // Submitted Alert
              $mdDialog.show(
                $mdDialog.alert()
                  .title('Submitted Title')
                  .content('Submitted Content')
                  .ok('Ahem')
              );
            } else if (typeof response.error != 'undefined' && response.error.indexOf('credentials') >= 0) {

              // Wrong Credentials

              Data.reset();

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Wrong Title')
                  .content('Wrong Content')
                  .ok('Lemme Retry')
                  .targetEvent(event)
              )
                .then(function () {
                  $location.url('/login');
                });
            } else if (typeof response.error != 'undefined' && response.error.indexOf('voted') >= 0) {

              // Already Voted

              Data.reset();

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Voted Title')
                  .content('Voted Content')
                  .ok('My Bad')
                  .targetEvent(event)
              )
                .then(function () {
                  $location.url('/login');
                });
            }
          })
          .error(function () {

            $scope.mode = 'retry';

            // Error Occurred

            $mdDialog.show(
              $mdDialog.alert()
                .title('Error Title')
                .content('Error Content')
                .ok('Lemme Retry')
            );
          });
      };

      $scope.next = function () {
        $location.url('/feedback');
      };

      $location.url(Data.properView());
      if (Data.properView() == '/vote') $scope.confirm();
    });

})();