findMoviesApp.controller('ListController', function($scope) {
    
	$scope.itens = [ ];
	
	$scope.pesquisar = function() {
        $scope.itens = [ ];
        $scope.loading = true;
        
        theMovieDb.search.getMovie({"query":$scope.titulo,"sort_by":"release_date.desc"}, 
        		function(data){
        			$scope.itens = angular.fromJson(data).results;
        			$scope.$apply();
            
    			},
    			function(data){
    				console.log("Error callback: " + data);
    			});
        
        $scope.loading = false;
        
    };
 
	
	$scope.limpar = function() {
        $scope.titulo = "";
        $scope.itens = [ ];
        $scope.loading = false;
    };
     
});