var boilersControllers = angular.module('boilersControllers', []);

boilersControllers.controller('BoilersCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.header = 'Паровые котлы «Е», МЗК-7';
    }]);
