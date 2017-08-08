angular.module('App').controller('newsCtrl', function ($scope, $location, $anchorScroll, $state, service) {

    $scope.scrollUpTo = function (id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        $location.hash(old);
    }

    $scope.moduleScrollTo = function (id) {
        $state.go('home', {
            '#': id
        });
        // $location.hash(id);
        // $anchorScroll();
    };

    $scope.products = function () {
        $state.go('products');
    };

    $scope.news = function () {
        $state.go('news');
    };

});