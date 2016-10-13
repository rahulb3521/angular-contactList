function AppController($scope, $http) {

    var refresh = function() {
        $http.get('/contactList').success(function(data) {
            console.log(data);
            $scope.contactlist = data;
            $scope.contact = '';
        });

    };

    refresh();

    $scope.addContact = function() {
        var contact = $scope.contact;
        $http.post('/contact', contact)
            .success(
                function(response) {
                    console.log(response);
                    console.log('Contact added');
                    refresh();
                },
                function(response) {
                    console.log('ERROR');
                }
            );

    };
    //remove
    $scope.removeContact = function(id) {
        console.log(id);

        var contact = $scope.contact;
        $http.delete('/contact/' + id)
            .success(
                function(response) {
                    console.log(response);
                    console.log('Contact deleted successfully');
                    refresh();
                },
                function(response) {
                    console.log('ERROR');
                }
            );
    };


}
