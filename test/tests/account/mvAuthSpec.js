describe( 'mvAuth', function () {
    var mvA, mvI;

    beforeEach( module( 'app' ) );
    
    beforeEach( inject( function ( $window ) {
        $window.bootstrappedUserObject = {password: 'pswrdxx', firstName: 'Johnxx', lastName: 'Chynowethxx', username: 'before', roles: ['xx'] };
        
    }) );

     beforeEach(inject(function(mvAuth, mvIdentity) {

         mvA = mvAuth;
         mvI = mvIdentity;
         

          var newUserData = {
                username: 'jchynwoeth',
                password: 'pswrd',
                firstName: 'John',
                lastName: 'Chynoweth'
            };
         mvA.createUser(newUserData);
        

     }) );


    it('should be able to add user', function(done) {
        
        done();
        expect(mvI.currentUser.username).equal("jchynwoeth");
        
    });


});


