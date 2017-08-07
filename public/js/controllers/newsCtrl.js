angular.module('App').controller('newsCtrl', function ($scope, $location, $anchorScroll, service) {

    $scope.scrollUpTo = function(id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        $location.hash(old);
    }

})