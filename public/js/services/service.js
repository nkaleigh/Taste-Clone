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

});