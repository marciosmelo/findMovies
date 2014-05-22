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
	
	theMovieDb.movies.getCredits({"id":$routeParams.movieId},
			function(data){
				$scope.castList = angular.fromJson(data).cast;
				$scope.crewList = angular.fromJson(data).crew;
				$scope.$apply();
			},
			function(data){
				console.log("Error Credits callback: " + data);
			});
	
	
	$scope.voltar = function(){
		$location.path("/");
	};
 
});