'use strict';

angular.module('twitterStreamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stream', {
        url: '/',
        templateUrl: 'app/stream/index.html',
        controller: 'StreamCtrl'
      });
  });