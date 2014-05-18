describe( 'mvAuth', function () {
    var mvAuth, mvIdentity;

    beforeEach( module( 'app' ) );
    
    beforeEach( inject( function ( $window ) {
        $window.bootstrappedUserObject = {password: 'pswrdxx', firstName: 'Johnxx', lastName: 'Chynowethxx', username: 'before', roles: ['xx'] };
        
    }) );

     beforeEach(inject(function(_mvAuth_, _mvIdentity_) {

         mvAuth = _mvAuth_;
         mvIdentity = _mvIdentity_;
         

          var newUserData = {
                username: 'jchynwoeth',
                password: 'pswrd',
                firstName: 'John',
                lastName: 'Chynoweth'
            };
         mvAuth.createUser(newUserData);
        

     }) );


    it('should be able to add user', function(done) {
        
        done();
        expect(mvIdentity.currentUser.username).equal("jchynwoeth");
        
    });



});


