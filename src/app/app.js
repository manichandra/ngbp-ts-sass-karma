
angular
    .module("ngBoilerplate", [
        "templates",
        "ngBoilerplate.home",
        "ngBoilerplate.about",
        "ngBoilerplate.contact",
        "ui.router.state"
    ])
    .config(function ($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/contact');
    });

