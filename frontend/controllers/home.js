app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'views/home.html',
      controller: 'homeController'
    });
});

app.controller("homeController", function ($scope, $http) {

});