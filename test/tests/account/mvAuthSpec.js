describe( 'mvAuth', function () {

    beforeEach( module( 'app' ) );
    beforeEach( inject( function ( $window ) {
        $window.bootstrappedUserObject = { username: 'before', roles: ['admin'] };
    }) );


    describe( 'canCreateNewUser', function () {
        it('Test mvAuth can create a new user', inject(function(mvAuth, mvIdentity) {

                var newUserData = {
                    username: 'jchynwoeth',
                    password: 'pswrd',
                    firstName: 'John',
                    lastName: 'Chynoweth'
                };

                mvAuth.createUser(newUserData).then(function(data) {
                    expect(data).to.be.falsy;
                });

            })
        );
    });



});