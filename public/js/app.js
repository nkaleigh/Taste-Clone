angular.module('App', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

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
        .state('productdetail', {
            url: '/our-products/:item',
            templateUrl: './views/productDetail.html',
            controller: 'productDetailCtrl'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: './views/cart.html',
            controller: 'cartCtrl'
        });
});