'use strict';

angular.module('twitterStreamApp')
    .controller('StreamCtrl', function ($scope, $http) {

      $scope.updateTwits = function(){
        $scope.twits = null;

        $http.get('/api/streams').success(function(data) {
          $scope.twits = data;
        });
      };

      $scope.storeTwit = function(item) {
        $http.post('/api/starred', { 'twit_id': item.id, twit: item }).success(function(){
          item.starred = true;
        });
      };

      $scope.deleteTwit = function(item) {
        $http.delete('/api/starred/' + item.id).success(function(){
          item.starred = null;
        });
      };

      $scope.updateTwits();

    });
