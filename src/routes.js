(function () {
    var sampleApp = angular.module('template-app', ['ngRoute', 'template-app.controllers']);
   
	sampleApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/client', {
           templateUrl: require('./modules/client/client-template.html'),
           controller: 'ClientController'
        })
        .when('/provider', {
           templateUrl: require('./modules/provider/provider-template.html'),
           controller: 'ProviderController'
        })
		.otherwise({
            redirectTo: '/'
        });
    }]);
})();
