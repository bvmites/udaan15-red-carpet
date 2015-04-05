(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('FeedbackCtrl', function ($scope, Data, $location, $http, $mdDialog) {
      $scope.viewport = Data.viewport;
      $scope.data = Data.feedback;
      $scope.mode = 'feedback';

      $scope.hearts = function () {
        return new Array(Data.feedback.stars);
      };

      $scope.blacks = function () {
        return new Array(5 - Data.feedback.stars);
      };

      $scope.feedback = function () {

        $scope.mode = 'upload';

        // Request server
        $http.post(Data.url.feedback, {
          login: {
            enroll: Data.login.enroll
          },
          feedback: Data.feedback
        })
          .success(function (response) {

            $scope.mode = 'logout';

            if (response.ok) {

              Data.login.hasFeedback = true;

              // Submitted Alert
              $mdDialog.show(
                $mdDialog.alert()
                  .title('Submitted Title')
                  .content('Submitted Content')
                  .ok('Ahem')
              );
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

      $scope.logout = function () {
        Data.reset();
        $location.url('/login');
      };

      //$location.url(Data.properView());
    });

})();