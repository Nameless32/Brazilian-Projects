var app = angular.module("app", ["ngRoute"]);

app.config(function ($httpProvider) {

    // alternatively, register the interceptor via an anonymous factory
    $httpProvider.interceptors.push(function($q) {
        return {
            'request': function(config) {
                if(config.url.startsWith('/api/')){
                    config.url = 'http://localhost:3005' + config.url;
                }

                var token = localStorage.getItem("member.token");
                if(token){
                    config.headers.token = token;
                }

                console.log(config);
                return config;
            },

            'response': function(response) {
                return response;
            }
        };
    });


});