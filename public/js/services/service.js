angular.module('App').service('service', function($http) {

    this.chocolates = function() {
        console.log('reached service');
        return $http({
            method: 'GET',
            url: '/api/tastechocolates/'
            // data: {name: 'kaleigh'}
        }).then(function(response) {
            return response;
        });
    };
});