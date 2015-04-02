(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('LoginCtrl', function ($scope, Data, $http, $location, screenSize, $mdDialog) {
      $scope.viewPort = {
        phone: screenSize.on('xs', function (match) {
          $scope.viewPort.phone = match;
        }),
        desktop: screenSize.on('sm, md, lg', function (match) {
          $scope.viewPort.desktop = match;
        })
      };

      $scope.data = Data.login;
      $scope.login = function () {

        // Request Server
        $http.post(Data.url.login, {
          enroll: Data.login.enroll,
          key: Data.login.key
        })
          .success(function (response) {
            console.log(response);
            if (response.ok == true) {
              Data.login.isLoggedIn = true;
              $location.url('/form');
            } else if (response.voted == true) {

              // Already Voted

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Voted Title')
                  .content('Voted Content')
                  .ariaLabel('Voted')
                  .ok('My Bad')
              );
            } else {

              // Wrong Credentials

              $mdDialog.show(
                $mdDialog.alert()
                  .title('Wrong Title')
                  .content('Wrong Content')
                  .ariaLabel('Credentials')
                  .ok('Lemme Retry')
              );
            }
          });
      };

      //
      //$scope.showConfirm = function(ev) {
      //  // Appending dialog to document.body to cover sidenav in docs app
      //  var confirm = $mdDialog.confirm()
      //    .parent(angular.element(document.body))
      //    .title('Would you like to delete your debt?')
      //    .content('All of the banks have agreed to forgive you your debts.')
      //    .ariaLabel('Lucky day')
      //    .ok('Please do it!')
      //    .cancel('Sounds like a scam')
      //    .targetEvent(ev);
      //  $mdDialog.show(confirm).then(function() {
      //    $scope.alert = 'You decided to get rid of your debt.';
      //  }, function() {
      //    $scope.alert = 'You decided to keep your debt.';
      //  });
      //};

      $scope.showRegistration = function(event) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('Registration Title')
            .content('Registration Content')
            .ariaLabel('Registration')
            .ok('Got it!')
            .targetEvent(event)
        );
      };

      if(Data.login.isLoggedIn){
        $location.url('/form');
      }

    });

})();