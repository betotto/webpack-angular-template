function implementation() {
	return {
		restrict: 'A',
		templateUrl: require('./client-directive.html'),
		scope: {},
		controller: ['$scope', function($scope) {
			$scope.counter = 0;
			$scope.text = '';
			$scope.add = function(e) {
				$scope.counter++;
			}
		}]
	}
}

module.exports = {
    name: 'cientDirective',
    implementation: implementation
};

