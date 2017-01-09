require.config({
    paths: {
        'angular': '/bower_components/angular/angular.min',
        'bootstrap': '/bower_components/bootstrap/dist/bootstrap.min',
        'jquery': '/bower_components/jquery/dist/jquery.min',
        'angular-route': '/bower_components/angular-route/angular-route.min',
        'coreModule': '/controllers/coreModule'
    },

    shim: {
     
        'coreModule': {
            deps: ['angular']
        }
    }
});

require(['coreModule'], function() {
    angular.bootstrap(document, ['coreModule']);
});
