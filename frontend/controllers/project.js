app.config(function ($routeProvider) {
  $routeProvider
    .when("/project", {
      templateUrl: 'views/projectList.html',
      controller: 'projectListController'
    })
    .when("/projectCreate", {
      templateUrl: 'views/projectCreate.html',
      controller: 'projectCreateController'
    })

});

app.controller("projectListController", function ($http, $scope) {
  $http.get('/api/project').then(function (response) {
    $scope.projects = response.data;
  }, function (rejection) {
    console.error(rejection);
  });
});

app.controller("projectNewController", function ($scope, $http) {

});
