var contactsControllers = angular.module('contactsControllers', []);

contactsControllers.controller('ContactsCtrl', ['$scope', '$http',
    function ($scope, $http) {
        //$http.get('phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});

        $scope.header = 'Наши координаты';
        //$scope.orderProp = 'age';
    }]);
