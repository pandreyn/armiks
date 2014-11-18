/**
 * Created by Andrey on 30.11.13.
 */
'use strict';

angular.module('services.breadcrumbs', []);
angular.module('services.breadcrumbs').factory('breadcrumbs', ['$rootScope', '$location',
    function ($rootScope, $location) {

        var breadcrumbs = [];
        var breadcrumbsService = {};

        var siteMap = [
            //{path: '/', name: 'Главная'},
            {path: '/about', name: 'О компании'},
            {path: '/price', name: 'Прайс-лист'},
            {path: '/teplo', name: 'Теплотехническое оборудование'},
            {path: '/teplo', name: 'Теплотехническое оборудование'},
            {path: '/teplo/page01', name: 'Подогреватели водоводяные систем теплоснабжения'},
            {path: '/teplo/page02', name: 'Подогреватели пароводяные ПП систем теплоснабжения'},
            {path: '/teplo/page03', name: 'Подогреватели водоводяные блочного типа с блоком опорных перегородок и профильными трубками'},
            {path: '/teplo/page04', name: 'Узел тепловой элеваторный УТЭ'},
            {path: '/teplo/page05', name: 'Грязевики абонентские (трубопроводов теплосети)'},
            {path: '/teplo/page06', name: 'Водоподогреватели паровые, емкие, горизонтальные (СТД).'},
            {path: '/blrsequipment', name: 'Котельное оборудование'},
            {path: '/blrsequipment/page01', name: 'Фильтры натрий-катионитные ФИПа'},
            {path: '/blrsequipment/page02', name: 'Фильтры осветлительные ФОВ'},
            {path: '/blrsequipment/page03', name: 'Деаэраторы атмосферные ДА'},
            {path: '/blrsequipment/page04', name: 'Колонки деаэрационные КДА'},
            {path: '/blrsequipment/page05', name: 'Баки деаэраторные атмосферные БДА'},
            {path: '/blrsequipment/page06', name: 'Охладители выпара ОВА'},
            {path: '/blrsequipment/page07', name: 'Гидрозатвор'},
            {path: '/blrsequipment/page08', name: 'Солерастворители'},
            {path: '/blrsequipment/page09', name: 'Холодильник отбора проб двухточечный диаметром 133 мм'},
            {path: '/blrsequipment/page10', name: 'Сепараторы непрерывной продувки'},
            {path: '/blrsequipment/page11', name: 'Подогреватель сетевой воды типа ПСВ'},
            {path: '/blrsequipment/page12', name: 'Подогреватели пароводяные (ППВ – 25; Q – 50 т/ч; Q –100 т/ч; Q – 200 т/ч; Q – 400 т/ч)'},
            {path: '/blrsequipment/page13', name: 'Теплообменники водоводяные (5 - 10 т/ч; 20 - 40 т/ч; 80-240 т/ч; 400 т/ч;)'},
            {path: '/blrsequipment/page14', name: 'Подогреватели мазута  ПМ 25-6; ПМР 64-15; ПМР 64-30; ПМР 13-60 и др.'},
            {path: '/blrsequipment/page15', name: 'Фильтры мазута ФМ'},
            {path: '/blrsequipment/page16', name: 'Клапан запорный соленоидный серии ЗСК'},
            {path: '/blrsequipment/page17', name: 'Экономайзер чугунный блочный ЭБ'},
            {path: '/boilers', name: 'Котлы паровые'},
            {path: '/contacts', name: 'Координаты'}
        ];

        //we want to update breadcrumbs only when a route is actually changed
        //as $location.path() will get updated imediatelly (even if route change fails!)
//    $rootScope.$on('$stateChangeSuccess',
//        function (event, toState, toParams, fromState, fromParams) {
        $rootScope.$on('$routeChangeSuccess', function () {

            var fullPath = $location.path();
            var pathElements = fullPath.split('/'), result = [], i;
            var breadcrumbPath = function (index) {
                return '/' + (pathElements.slice(0, index + 1)).join('/');
            };

            pathElements.shift();
            var fPath = '';
            for (i = 0; i < pathElements.length; i++) {

                var name = pathElements[i];
                fPath = fPath + '/' + pathElements[i];
                for (var j in siteMap) {
                    if (siteMap[j].path === fPath) {
                        name = siteMap[j].name;
                        break;
                    }
                }
                result.push({name: name, path: breadcrumbPath(i)});
            }

            breadcrumbs = result;
        });

        breadcrumbsService.getAll = function () {
            return breadcrumbs;
        };

        breadcrumbsService.getFirst = function () {
            return breadcrumbs[0] || {};
        };

        return breadcrumbsService;
    }]);