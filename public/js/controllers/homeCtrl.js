angular.module('App').controller('homeCtrl', function($scope, $location, $anchorScroll, service) {
    // $scope.broken = function() {
    //     console.log('reached controller');
    //     return service.broken().then(function(response) {
    //         console.log('response', response.data['0']);
    //         $scope.response = response.data;
    //     })
    // }

    $scope.scrollTo = function(id) {
        var old = $location.hash();
        $location.hash(id);
       $anchorScroll();
       $location.hash(old);
    };
});