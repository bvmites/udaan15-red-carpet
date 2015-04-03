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
        risingStar: '',
        sportsIcon: '',
        face: {
          male: '',
          female: ''
        },
        styleIcon: {
          male: '',
          female: ''
        },
        persona: {
          male: '',
          female: ''
        },
        artist: {
          male: '',
          female: ''
        }
      },
      viewport: {}
    })
    .run(function (Data, screenSize) {
      Data.viewport.xs = screenSize.on('xs', function (match) {
        Data.viewport.xs = match;
        if(match) Data.viewport.container = '100%';
      });
      Data.viewport.sm = screenSize.on('sm', function (match) {
        Data.viewport.sm = match;
        if(match) Data.viewport.container = '750px';
      });
      Data.viewport.md = screenSize.on('md', function (match) {
        Data.viewport.md = match;
        if(match) Data.viewport.container = '960px';
      });
      Data.viewport.lg = screenSize.on('lg', function (match) {
        Data.viewport.lg = match;
        if(match) Data.viewport.container = '1024px';
      });
      if(Data.viewport.xs) Data.viewport.container = '100%';
      else if(Data.viewport.sm) Data.viewport.container = '750px';
      else if(Data.viewport.md) Data.viewport.container = '960px';
      else Data.viewport.container = '1024px';
    });

})();