findMoviesApp.controller('DetailController', function($scope,$routeParams) {
 
    $scope.message = 'This is the detail page of the movie id:' + $routeParams.movieId;
    
 
});