//require('../sass/app.scss');
var clientController = require('./modules/client/client-ctrl');
var providerController = require('./modules/provider/provider-ctrl');
var clientDirective = require('./modules/client/client-directive');

(function() {
	
	angular.module('template-app.controllers', [])
	.controller(clientController.name, clientController.implementation)
	.controller(providerController.name, providerController.implementation)
	.directive(clientDirective.name, clientDirective.implementation);

})();

require('./routes');
