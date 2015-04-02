(function () {
  'use strict';

  angular.module('u15RCApp')
    .value('Data', {
      login: {
        enroll: '',
        key: '',
        hasRegistered: false,
        isLoggedIn: false
      }
    });

})();