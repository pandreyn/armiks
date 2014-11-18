var priceControllers = angular.module('priceControllers', []);

priceControllers.controller('PriceCtrl', ['$scope' , '$http',
    function ($scope, $http) {
        $http.get('data/price.json').success(function(data) {
            $scope.files = data;
        });
        $scope.header = 'Прайс-лист';
    }]);
