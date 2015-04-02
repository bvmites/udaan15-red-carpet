(function () {
  'use strict';

  angular.module('u15RCApp')
    .value('Data', {
      login: {
        enroll: '',
        key: '',
        voted: false,
        isLoggedIn: false
      },
      url: {
        login: 'http://vote.udaan15.com/login',
        vote: 'http://vote.udaan15.com/vote'
      }
    });

})();