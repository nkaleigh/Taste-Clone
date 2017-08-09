angular.module('App').controller('homeCtrl', function ($scope, $location, $anchorScroll, $state, service) {

    $scope.scrollTo = function (id) {
        $location.hash(null);
        let original = $location.hash();
        $location.hash(id);
        $anchorScroll();
        $location.hash(original);
    };

    $scope.moduleScrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
        // $state.go('home', {'#':'id'});
    };

    $scope.products = function () {
        $state.go('products');
    };

    $scope.news = function () {
        $state.go('news');
    };

});