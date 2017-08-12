angular.module('App').controller('productsCtrl', function ($scope, $location, $anchorScroll, $state, service) {

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
    };

    $scope.products = function () {
        $state.go('products');
    };

    $scope.news = function () {
        $state.go('news');
    };


    $scope.chocolate = function () {
        return service.chocolates().then(function (response) {
            $scope.chocolates = response;
        })
    }

    $scope.chocolate();

});