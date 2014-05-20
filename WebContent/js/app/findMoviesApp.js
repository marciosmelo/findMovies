var findMoviesApp = angular.module('findMoviesApp', []);

findMoviesApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl : 'templates/list.html',
		controller : 'ListController'
	}).when('/detail', {
		templateUrl : 'templates/detail.html',
		controller : 'DetailController'
	}).otherwise({
		redirectTo : '/list'
	});
} ]);
