var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.x1 = "ashok";
    $scope.x2 = angular.uppercase($scope.x1);
});