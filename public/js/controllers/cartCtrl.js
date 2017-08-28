angular.module('App').controller('cartCtrl', function($scope, service) {

    getCartItems = function() {
        console.log('cartCtrl');
        $scope.cartItems = service.getCartItems().then(function(response) {
            console.log('cartCtrl:cartItems', response);
            $scope.cartItems = response;
        });
    };
    getCartItems();
});