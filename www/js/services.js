'use strict';

angular.module('conFusion.services', ['ngResource'])
    .constant('baseURL', 'http://localhost:3000/')
    .factory('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        var menuFactory = {};

        menuFactory.getDishes = function () {
            return $resource(baseURL + "dishes/:id", null, {'update': {method: 'PUT'}});
        };

        menuFactory.getPromotion = function () {
            return $resource(baseURL + "promotions/:id");
        };

        return menuFactory;
    }])
    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        return $resource(baseURL + "leadership/:id");
    }])
    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        return $resource(baseURL + "feedback/:id");
    }])
    .factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        var favFac = {};
        var favorites = [];

        favFac.addToFavorites = function (index) {
            for (var i = 0; i < favorites.length; i++) {
                if (favorites[i].id == index)
                    return;
            }

            favorites.push({id: index});
        };

        return favFac;
    }]);
