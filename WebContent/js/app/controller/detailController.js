findMoviesApp.controller('DetailController', function($scope,$routeParams,$location) {
 
    $scope.movie = [ ];
    $scope.credits = [ ];
    
	theMovieDb.movies.getById({"id":$routeParams.movieId }, 
			function(data){
				$scope.movie = angular.fromJson(data);
				$scope.$apply();
			},
			function(data){
				console.log("Error Movie callback: " + data);
			});
	
	theMovieDb.credits.getCredit({"id":$routeParams.movieId},
			function(data){
				$scope.credits = angular.fromJson(data);
				$scope.$apply();
			},
			function(data){
				console.log("Error Credits callback: " + data);
			});
	
	
	$scope.voltar = function(){
		$location.path("/");
	};
 
});