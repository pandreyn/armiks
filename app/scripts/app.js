'use strict';

var armiksApp = angular.module('armiksApp', [
    'ngRoute',
    'ngAnimate',
    'services.breadcrumbs',
    'mainControllers',
    'priceControllers'
//    'analytics'
]);


armiksApp.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'views/about/about.html'
            }).
            when('/about', {
                templateUrl: 'views/about/about.html'
            }).
            when('/price', {
                templateUrl: 'views/price/price.html',
                controller: 'PriceCtrl'
            }).
            when('/contacts', {
                templateUrl: 'views/contacts/contacts.html'
            }).
            when('/boilers', {
                templateUrl: 'views/boilers/boilers.html'
            }).
            when('/teplo', {
                templateUrl: 'views/teplo/teplo.html'
            }).
            when('/economizers', {
                templateUrl: 'views/economizers/economizers.html'
            }).
            when('/404', {
                templateUrl: 'views/404/404.html'
            }).
            when('/teplo/:page', {
                templateUrl: function (params) {
                    return 'views/teplo/' + params.page + '.html';
                }
            }).
            when('/blrsequipment', {
                templateUrl: 'views/blrsequipment/blrsequipment.html'
            }).
            when('/blrsequipment/:page', {
                templateUrl: function (params) {
                    return 'views/blrsequipment/' + params.page + '.html';
                }
            }).
            otherwise({
                redirectTo: '/404'
            });
    }]);
