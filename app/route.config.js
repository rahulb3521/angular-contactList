var angular = require('angular');

var app = angular.module('contactListApp', [
    'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // List Contacts
        .when("/list-contacts", {templateUrl: "templates/about.html", controller: "listContacts"})
        // else 404
        .otherwise("/404", {templateUrl: "error-pages/404.html", controller: "PageCtrl"});
}]);