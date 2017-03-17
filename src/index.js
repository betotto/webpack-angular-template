//require('../sass/app.scss');
var clientController = require('./modules/client/client-ctrl');
var providerController = require('./modules/provider/provider-ctrl');
//require('./modules/provider/provider-ctrl');

(function() {
	
	angular.module('template-app.controllers', [])
	.controller(clientController.name, clientController.implementation)
	.controller(providerController.name, providerController.implementation);

})();

require('./routes');
