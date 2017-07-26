angular.module('App').service('service', function($http) {

    this.broken = function() {
        console.log('reached service');
        return $http({
            method: 'POST',
            url: '/api/test/',
            data: {name: 'kaleigh'}
        }).then(function(response) {
            console.log(response);
        });
    };
});