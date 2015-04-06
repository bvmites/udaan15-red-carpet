(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('LoginCtrl', function ($scope, Data, $http, $location, $mdDialog, $mdToast) {
      $scope.data = Data.login;
      $scope.viewport = Data.viewport;
      $scope.login = function (event) {

        // Enroll Validator
        if (!(/^\d{12}$/.test(Data.login.enroll))) {
          $mdToast.show(
            $mdToast
              .simple()
              .content('12 Digit Enrollment No.')
              .position(Data.viewport.xs ? 'bottom' : 'top right')
              .capsule(true)
          );
          angular.element(document.querySelector('#enroll')).focus();
          return;
        }

        // Key Validator
        if (Data.login.key.length != 4) {
          $mdToast.show(
            $mdToast
              .simple()
              .content('4 Digit Key')
              .position('top right')
              .capsule(true)
          );
          angular.element(document.querySelector('#key')).focus();
          return;
        }

        // Request Server
        $http.post(Data.url.login, {
          enroll: Data.login.enroll,
          key: Data.login.key
        })
          .success(function (response) {
            if (response.ok) {
              Data.login.isLoggedIn = true;
              $location.url('/form');
            } else if (typeof response.error != 'undefined' && response.error.indexOf('credentials') >= 0) {

              // Wrong Credentials

              Data.login.key = '';

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Wrong Key')
                  .content('Enter the key provided at registration desk.')
                  .ok('Okay')
                  .targetEvent(event)
              );
            } else if (typeof response.error != 'undefined' && response.error.indexOf('voted') >= 0) {

              // Already Voted

              Data.reset();

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Already Voted')
                  .content('You have already voted once.')
                  .ok('My Bad')
                  .targetEvent(event)
              );
            }
          })
          .error(function () {

            // Error Occurred

            $mdDialog.show(
              $mdDialog.alert()
                .title('Connection Error')
                .content('The very basic need for voting online is an internet connection !!')
                .ok('Connect')
                .targetEvent(event)
            );
          });
      };

      $scope.showRegistration = function (event) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('Here\'s the way')
            .content('Contact the registration desks set up @ A-block. ASAP.')
            .ok('Got it!')
            .targetEvent(event)
        );
      };

      $scope.enrollHandler = function (event) {
        if (event.which == 13) $scope.login();
      };

      $scope.keyHandler = function (event) {
        if (event.which == 13) $scope.login();
      };

      $location.url(Data.properView());

    });

})();