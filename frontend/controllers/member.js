app.config(function ($routeProvider) {
  $routeProvider
    .when("/member", {
      templateUrl: 'views/memberList.html',
      controller: 'memberListController'
    })
    .when("/memberCreate", {
      templateUrl: 'views/memberCreate.html',
      controller: 'memberCreateController'
    });
});

app.controller("memberListController", function ($scope, $http) {
  $http.get('/api/member').then(function (response) {
    $scope.members = response.data;
  }, function (rejection) {
    console.error(rejection);
  });
});

app.controller("memberCreateController", function ($scope, $http) {

  $scope.current = {};

  $scope.roles = [];

  $http.get('/api/memberRoles').then(function (response) {
    $scope.roles = response.data.map(function (roleName) {
      return {selected: false, name: roleName};
    });
  }, function (rejection) {
    console.log(rejection);
  });


  $scope.save = function () {
    var user = angular.copy($scope.current);

    user.roles = $scope.roles.filter(function (role) {
      return role.selected === true
    }).map(function (role) {
      return role.name;
    });

    $http.post('/api/member', user).then(function (response) {
      console.log(response)
    }, function (rejection) {
      console.log(rejection);
    });

  };

});