(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('VoteCtrl', function ($scope, Data, $location, $http, $mdDialog) {
      $scope.viewport = Data.viewport;

      $scope.vote = function () {

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
                  .title('Thank You')
                  .content('Your vote has been submitted successfully.')
                  .ok('Okay')
              );
            } else if (typeof response.error != 'undefined' && response.error.indexOf('credentials') >= 0) {

              // Wrong Credentials

              Data.reset();

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Wrong Key')
                  .content('Enter the key provided at registration desk.')
                  .ok('Okay')
              )
                .then(function () {
                  $location.url('/login');
                });
            } else if (typeof response.error != 'undefined' && response.error.indexOf('voted') >= 0) {

              // Already Voted

              Data.reset();

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Already Voted')
                  .content('You have already voted once.')
                  .ok('My Bad')
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
                .title('Connection Error')
                .content('The very basic need for voting online is an internet connection !!')
                .ok('Connect')
            );
          });
      };

      $scope.next = function () {
        $location.url('/feedback');
      };

      $location.url(Data.properView());
      if (Data.properView() == '/vote') $scope.vote();
    });

})();