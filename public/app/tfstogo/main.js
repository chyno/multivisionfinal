'use strict';

angular.module('app')
    .controller('MainCtrl', function($scope, buildService) {
        $scope.awesomeThings = ['Julian', 'Jack', 'Windsurfing'];
    $scope.init = function() {
        buildService.getLastBuild();
    };
});
