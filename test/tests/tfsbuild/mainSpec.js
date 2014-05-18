'use strinct';

describe('buildsControllerApp', function() {
    //load the controller's module
    beforeEach(module('app'));

    var MainCtrl, scope;
    var buidService;

    var deferred;
    var q;

    //data
    var build;

    beforeEach(function() {
        build = { "buildName ": "Develoipment TFS to GO", "Success": true, "timeFinished": "11\/29\/2014 04:09:31" };

        buidService = {
            getLastBuild: function() {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    })
    //Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            buildService: buidService
        });
    }));

    it('should attach a list of awesomThings to the scope', function() {
        expect(scope.awesomeThings.length).equals(3);
    });

    it('should request latest build', function() {
          spyOn(buidService, 'getLastBuild').andCallThrough();
        scope.init();

        expect(buidService.getLastBuild);

    });
});
