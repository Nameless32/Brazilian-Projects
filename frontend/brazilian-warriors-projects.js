const app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when("/project", {
            templateUrl: 'views/projectList.html',
            controller: 'projectListController'
        }).when("/projectNew", {
            templateUrl: 'views/projectNew.html',
            controller: 'projectNewController'
        });
});

app.controller("homeController", function ($scope, $http) {
    console.log("passou aqui")
});

app.controller("projectListController", function ($http ,$scope) {
    $http.get('/api/project').then(function (response) {
        $scope.projects = response.data;
    }, function () {

    });
});

app.controller("projectNewController", function ($scope, $http) {

});

app.controller("memberListController", function ($scope, $http) {
    $http.get('/api/member').then(function (response) {
        $scope.members = response.data;
    }, function () {

    });
});