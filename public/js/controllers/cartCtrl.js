angular.module('App').controller('cartCtrl', function($scope) {

    getCartItems = function() {
        $scope.cartItems = service.getCartItems().then(function(response) {
            $scope.itemsInCart = response;
        });
    };

    
    getCartItems();
});