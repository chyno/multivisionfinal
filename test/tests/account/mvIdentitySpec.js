describe('mvIdentity', function() {
     
    beforeEach(module('app')); 


    beforeEach(inject(function($window) {
        $window.bootstrappedUserObject = {username:'jchynwoeth', roles: ['admin']};
    }));



    describe('isAuthenicatedUser', function() {
        it('should be a valid Identity object', inject(function(mvIdentity) {
           expect(mvIdentity.isAuthenticated()).to.be.true;
        }));
    });

     describe('isAuthenicatedUser', function() {
        it('should be a valid Identity object', inject(function(mvIdentity) {
           expect(mvIdentity.isAuthorized('admin')).to.be.true;
        }));
    });

})