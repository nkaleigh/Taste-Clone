angular.module('App').service('service', function($http) {

    this.chocolates = function() {
        return $http({
            method: 'GET',
            url: '/api/tastechocolates/'
            // data: {name: 'kaleigh'}
        }).then(function(response) {
            return response.data;
        });
    };
    this.chocolate = function(product) {
        return $http.get('/api/getchocolate/' + product).then(function(response) {
            return response.data;
        })
    };
    this.addItem = function(item) {
        console.log('service:addItem:item', item);
        return $http({
            method: 'POST',
            url: '/api/addItem',
            data: item
        }).then(function(resonse) {
            console.log('response', response);
        });
    };
    this.getCartItems = function() {
        console.log('service');
        return $http({
            method: 'GET',
            url: '/api/getCartItems/'
        }).then(function(response) {
            console.log('service:response', response.data);
            return response.data;
        });
    };
    this.updateSubtotal = function(quantityUpdates) {
        // console.log('reached service:updateCartQuantity', quantityUpdates);ç
        return $http.put('/api/updateSubtotal/', quantityUpdates);
    };

});