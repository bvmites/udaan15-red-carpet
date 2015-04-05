(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('FeedbackCtrl', function ($scope, Data, $location, $http, $mdDialog) {
      $scope.viewport = Data.viewport;
      $scope.data = Data.feedback;
      $scope.mode = 'feedback';

      $scope.stars = function () {
        return new Array(Data.feedback.stars);
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
            }
          })
          .error(function () {

            $scope.mode = 'retry';

            // Error Occurred

            $mdDialog.show(
              $mdDialog.alert()
                .title('Connection Error')
                .content('The very basic need for voting online is an internet connection !!')
                .ok('Lemme Retry')
            );
          });
      };

      $scope.logout = function () {
        Data.reset();
        $location.url('/login');
      };

      $location.url(Data.properView());
    });

})();