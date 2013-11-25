var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('MainCtrl', ['$scope','$location',
    function ($scope, $location) {
        $scope.location = $location;

        $scope.isCurPath = function(path){
            return $location.path() === path ? true : false;
        };

        $scope.menus = [
            {name: 'О компании', path: '/about', issidemenu: true, istopmenu: true, level: 0},
            {name: 'Прайс-лист', path: '/price', issidemenu: true, istopmenu: true, level: 0},
            {name: 'Теплотехническое оборудование', path: '/', issidemenu: true, istopmenu: true, level: 1},
            {name: 'Котельное оборудование', path: '/', issidemenu: true, istopmenu: true, level: 1},
            {name: 'Котлы паровые', path: '/boilers', issidemenu: true, istopmenu: true, level: 1},
            {name: 'Координаты', path: '/contacts', issidemenu: true, istopmenu: true, level: 0}
        ];

        //-------------------------------------------------------------
        // sidebar
        $('#sidebar').affix({
            offset: {
                top: 245
            }
        });

        var $body   = $(document.body);
        var navHeight = $('.navbar').outerHeight(true) + 10;

        $body.scrollspy({
            target: '#leftCol',
            offset: navHeight
        });
        //-------------------------------------------------------------

    }]);