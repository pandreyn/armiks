var aboutControllers = angular.module('aboutControllers', []);

aboutControllers.controller('AboutCtrl', ['$scope', '$http',
    function ($scope, $http) {
        //$http.get('phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});

        $scope.header = 'О компании';
        //$scope.orderProp = 'age';
    }]);
