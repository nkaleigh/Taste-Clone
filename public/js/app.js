angular.module('App', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
    })
    .state('products', {
        url: '/our-products',
        templateUrl: './views/products.html',
        controller: 'productsCtrl'
    })
    .state('news', {
        url: '/in-the-news',
        templateUrl: './views/news.html',
        controller: 'newsCtrl'
    })
});

