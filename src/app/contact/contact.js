angular.module('ngBoilerplate.contact', ["ui.router.state"])
    .config(function config($stateProvider) {
        $stateProvider.state("contact", {
            url: "/contact",
            controller: "contactController as vm",
            templateUrl: "contact/contact.html"
        });
    })
    /** @ngInject */
    .controller('contactController', function ($scope) {
        // var vm = this;
        $scope.name = 'Contact page';
        $scope.info = "Information";
    });
