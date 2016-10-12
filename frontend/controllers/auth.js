app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'logoutController'
        });

});

app.controller('loginController', function ($scope, $http, $location) {

    $scope.current = {};

    $scope.login = function () {
        $http.post('/api/auth/login', $scope.current).then(function (response) {
            console.log(response);
            localStorage.setItem("member.token", response.data.token);
            $location.path('/');
        }, function (rejection) {
            console.log(rejection);
        });
    };


});

app.controller('logoutController', function ($scope, $http, $location) {
    $scope.login = function () {
        $http.get('/api/auth/logout').then(function (response) {
        }, function (rejection) {
        });
    };

    localStorage.removeItem('member.token');
    $location.path('/');
});