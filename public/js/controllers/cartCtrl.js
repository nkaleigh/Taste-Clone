angular.module('App').controller('cartCtrl', function ($scope, service) {

 
        service.getCartItems().then(function (response) {
            console.log('cartCtrl:cartItems', response);
            $scope.cartItems = response.items;
            $scope.subtotal = response.subtotal;
        });

    // $scope.subtotal = 

    $scope.quantityChange = function() {
        console.log('changed!');
    };
    // $scope.updateCartQuantity = function(quantityUpdates) {
    //     console.log('cartCtrl:update', quantityUpdates);
    //     service.updateCartQuantity(quantityUpdates);
    // };
});