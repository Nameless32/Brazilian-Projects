app.config(function ($routeProvider) {
    $routeProvider
        .when("/member", {
            templateUrl: 'views/memberList.html',
            controller: 'memberListController'
        })
        .when("/memberCreate", {
            templateUrl: 'views/memberCreate.html',
            controller: 'memberCreateController'
        })
        .when("/memberEdit/:id", {
            templateUrl: 'views/memberEdit.html',
            controller: 'memberEditController'
        });
});

app.controller("memberListController", function ($scope, $http) {
    $http.get('/api/member').then(function (response) {
        $scope.members = response.data;
    }, function (rejection) {
        console.error(rejection);
    });
});

app.controller("memberCreateController", function ($scope, $http, $location) {

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
            console.log(response);
            $location.path("/member");
        }, function (rejection) {
            console.log(rejection);
        });

    };

});


app.controller("memberEditController", function ($scope, $http, $location, $routeParams) {

    $scope.current = {};

    $scope.roles = [];

    function upateRoles(){
        if($scope.roles.length == 0){
            return;
        }

        if(!$scope.current.roles){
            return;
        }

        $scope.roles.forEach(function (role) {
            if($scope.current.roles.indexOf(role.name) != -1 ){
                role.selected = true;
            }
        });

    }

    $http.get('/api/member/' + $routeParams.id).then(function (response) {
        $scope.current = response.data;
        upateRoles();
    }, function (rejection) {
        console.log(rejection);
    });

    $http.get('/api/memberRoles').then(function (response) {
        $scope.roles = response.data.map(function (roleName) {
            return {selected: false, name: roleName};
        });
        upateRoles();
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

        $http.put('/api/member', user).then(function (response) {
            console.log(response);
            $location.path("/member");
        }, function (rejection) {
            console.log(rejection);
        });

    };

});