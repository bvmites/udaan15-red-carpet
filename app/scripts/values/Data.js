(function () {
  'use strict';

  angular.module('u15RCApp')
    .value('Data', {
      login: {
        enroll: '',
        key: '',
        hasLoggedIn: false,
        isLoggedIn: false
      }
    });

})();