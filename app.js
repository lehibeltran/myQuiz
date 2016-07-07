angular.module('quizApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){
    $stateProvider.state('home', {
            url: '/',
            templateUrl: 'components/home/homeView.html'
        });
    $urlRouterProvider.otherwise("/");
});