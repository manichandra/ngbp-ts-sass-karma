angular.module('ngBoilerplate.about', ["ui.router.state"])
    .config(['$stateProvider',function config($stateProvider) {
        $stateProvider.state("about", {
            url: "/about",
            controller: "AboutController as vm",
            templateUrl: "about/about.html"
        });
    }])
    /** @ngInject */
    .controller('AboutController', function ($scope) {
        // var vm = this;
        $scope.name = 'About page';
        $scope.info = "Information";
    });
