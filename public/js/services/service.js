angular.module('App').service('service', function($http) {

    this.chocolates = function() {
        console.log('reached service.chocolates');
        return $http({
            method: 'GET',
            url: '/api/tastechocolates/'
            // data: {name: 'kaleigh'}
        }).then(function(response) {
            return response;
        });
    };
    this.chocolate = function(product) {
        console.log('reached service.chocolate', product);
        return $http.get('/api/getchocolate/' + product).then(function(response) {
            return response;
        })
    };

});