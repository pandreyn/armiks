var ventControllers = angular.module('ventControllers', []);

ventControllers.controller('VentCtrl', ['$scope', '$http',
    function ($scope, $http) {
        //$http.get('phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});

        $scope.header = 'Вентиляторы и отопительное оборудование';
        //$scope.orderProp = 'age';
    }]);
