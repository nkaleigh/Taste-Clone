angular.module('App').controller('homeCtrl', function ($scope, $location, $anchorScroll, $state, service) {
    // $scope.broken = function() {
    //     console.log('reached controller');
    //     return service.broken().then(function(response) {
    //         console.log('response', response.data['0']);
    //         $scope.response = response.data;
    //     })
    // }

    $scope.scrollTo = function (id) {
        $location.hash(null);
        let original = $location.hash();
        $location.hash(id);
        $anchorScroll();
        $location.hash(original);
    };

    $scope.moduleScrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
        // $state.go('home', {'#':'id'});
    };

    $scope.news = function() {
        $state.go('news');
    };

});