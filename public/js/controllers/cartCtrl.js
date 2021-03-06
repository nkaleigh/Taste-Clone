angular.module('App').controller('cartCtrl', function ($scope, service) {

    var originalQuantity = [];

    service.getCartItems().then(function (response) {
        for (var i = 0; i < response.items.length; i++) {
            originalQuantity.push({chocolate_id: response.items[i].chocolate_id, quantity: response.items[i].quantity});
        }
        $scope.cartItems = response.items;
        $scope.subtotal = response.subtotal;
    });


    $scope.updateSubtotal = function(quantityUpdates) {
        console.log('cartCtrl:update', quantityUpdates);
        for (var i = 0; i < quantityUpdates.length; i++) {
            if (isNaN(quantityUpdates[i].quantity)) {
                console.log(quantityUpdates[i].quantity + " is not a number");
                for (var j = 0; j < originalQuantity.length; j++) {
                    if (originalQuantity[j].chocolate_id === quantityUpdates[i].chocolate_id) {
                        quantityUpdates[i].quantity = originalQuantity[j].quantity;
                    }
                }
            } 
        }    
        service.updateSubtotal(quantityUpdates).then(function(response) {
            console.log('$scope.updateSubtotal:response', response);
            $scope.subtotal = response.subtotal;
        });
    };
});