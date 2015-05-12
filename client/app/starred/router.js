'use strict';

angular.module('twitterStreamApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('starred', {
        url: '/starred',
        templateUrl: 'app/starred/index.html',
        controller: 'StarredCtrl'
      });
  });