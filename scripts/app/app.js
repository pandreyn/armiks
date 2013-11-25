
var armiksApp = angular.module('armiksApp', [
    'ngRoute',
    'ngAnimate',
    'mainControllers',
    'aboutControllers',
    'priceControllers',
    'contactsControllers',
    'boilersControllers'
]);

armiksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'scripts/modules/about/about.html',
                controller: 'AboutCtrl'
            }).
            when('/about', {
                templateUrl: 'scripts/modules/about/about.html',
                controller: 'AboutCtrl'
            }).
            when('/price', {
                templateUrl: 'scripts/modules/price/price.html',
                controller: 'PriceCtrl'
            }).
            when('/contacts', {
                templateUrl: 'scripts/modules/contacts/contacts.html',
                controller: 'ContactsCtrl'
            }).
            when('/boilers', {
                templateUrl: 'scripts/modules/boilers/boilers.html',
                controller: 'BoilersCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
