(function () {
  'use strict';

  angular.module('u15RCApp')
    .controller('LoginCtrl', function ($scope, Data, $http, $location, screenSize) {
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

        // todo: Load processing icon

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
              // todo: Alert voted
              alert('Already Voted');
            } else {
              // todo: Alert Wrong Credentials
              alert('Wrong Credentials');
            }
          });
      }
    });

})();