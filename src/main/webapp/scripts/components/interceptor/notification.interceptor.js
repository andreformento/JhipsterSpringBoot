 'use strict';

angular.module('jhipsterspringbootApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterspringbootApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterspringbootApp-params')});
                }
                return response;
            }
        };
    });
