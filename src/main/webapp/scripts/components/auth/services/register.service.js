'use strict';

angular.module('jhipsterspringbootApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


