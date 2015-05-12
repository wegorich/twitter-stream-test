'use strict';

angular.module('twitterStreamApp')
    .controller('StarredCtrl', function ($scope, $http) {
      $scope.updateTwits = function() {
        $scope.starred = null;

        $http.get('/api/starred').success(function (data) {
          $scope.starred = data;
        });
      };

      $scope.deleteTwit = function(item) {
        $http.delete('/api/starred/' + item.twit_id).success(function(){
          var _index = $scope.starred.indexOf(item);
          if (_index > -1){
            $scope.starred.splice(_index, 1);
          }
        });
      };

      $scope.updateTwits();
    });
