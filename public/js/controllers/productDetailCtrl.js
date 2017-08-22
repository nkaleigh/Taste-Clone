angular.module('App').controller('productDetailCtrl', function ($scope, $location, $anchorScroll, $state, service, $stateParams) {

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

    $scope.itemDetail = service.chocolate($stateParams.item).then(function (response) {
        $scope.item = response;
    });

    $scope.addItem = function(itemId) {
        console.log('productDetailCtrl:addItem:itemId', itemId);
        var itemQuantity = 1;
        var itemObj = {itemId, "quantity": itemQuantity};
        console.log('productDetailCtrl:addItem:itemObj', itemObj);
        service.addItem(itemObj);
    };

});