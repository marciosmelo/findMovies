findMoviesApp.controller('ListController', function($scope) {
    
	$scope.itens = [ ];
	
	$scope.pesquisar = function() {
        $scope.itens = [ ];
        //$scope.loading = true;
        
        theMovieDb.search.getMovie({"query":$scope.titulo}, 
        		function(data){
        			$scope.itens = angular.fromJson(data).results;
        			$scope.$apply();	
            
    			},
    			function(data){
    				console.log("Error callback: " + data);
    			});
        
        
    };
 
	
	$scope.limpar = function() {
        $scope.title = "";
        $scope.itens = [ ];
        $scope.loading = false;
    };
     
});