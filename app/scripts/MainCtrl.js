/*global $:false */
'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('MainCtrl', ['$scope', '$location', 'breadcrumbs', '$http',
    function ($scope, $location, breadcrumbs, $http) {
        $scope.location = $location;
        $scope.breadcrumbs = breadcrumbs;

        $scope.isCurPath = function (path) {
            var s = $location.path();
            return s.indexOf(path) !== -1;
        };

        $http.get('data/menu.json').success(function (data) {
            $scope.menus = data;
        });


        //-------------------------------------------------------------
        // sidebar
        $('#sidebar').affix({
            offset: {
                top: 0
            }
        });

//        var $body = $(document.body);
//        //var navHeight = $('#header').outerHeight(true) + 100;
//
//        $body.scrollspy({
//            target: '#leftCol',
//            offset: 100
//        });
        //-------------------------------------------------------------

    }]);