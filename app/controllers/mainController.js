function AppController($scope, $http) {

    $http.get('/contactList').success(function(data) {
    	console.log(data);
        $scope.contactlist = data;
    });

    $scope.addContact = function() {
    	console.log($http);
        console.log($scope.contact);
        var contact = $scope.contact;
        $http.post('/contact', contact)
            .then(
                function(response) {
                    console.log(response);
                    console.log('Contact added successfully');
                },
                function(response) {
                    console.log('ERROR');
                }
            );
    };


}
