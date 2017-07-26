angular.module('App').controller('homeCtrl', function($scope, service) {
    $scope.broken = function() {
        console.log('reached controller');
        return service.broken();
    }
});