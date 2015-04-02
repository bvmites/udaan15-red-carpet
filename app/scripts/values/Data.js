(function () {
  'use strict';

  angular.module('u15RCApp')
    .value('Data', {
      login: {
        enroll: '',
        key: '',
        isLoggedIn: true
      },
      url: {
        login: 'http://54.187.188.224:8001/api/login',
        vote: 'http://54.187.188.224:8001/api/vote'
      },
      form: {

      }
    });

})();