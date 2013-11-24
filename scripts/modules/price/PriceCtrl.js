var priceControllers = angular.module('priceControllers', []);

priceControllers.controller('PriceCtrl', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        //$http.get('phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});
        $scope.header = 'Прайс-лист';

        $scope.files = [
        {
            name: 'прайс-лист в формате Microsoft Excell',
            pic: 'images/xls.gif',
            path: 'files/price_armiks2000.xls'
        },
        {
            name: 'прайс-лист в архиве RAR ',
            pic: 'images/rar.gif',
            path: 'files/price_armiks2000.rar'
        }];

    }]);
