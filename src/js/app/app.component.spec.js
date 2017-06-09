import 'angular';
import 'angular-mocks';

import { appModule } from './app.module';

describe('app component tests', function() {

    var mockScope = null;
    var compileSvc = null;
    var httpBackendSvc = null;

    function getColorData() {
        return [
            { id: 1, name: 'blue' },
            { id: 2, name: 'yellow' }
        ];
    }

    function getCarData() {
        return [
            { id: 1, make: 'Chevrolet', model: 'Volt', year: 2011, color: 'blue', price: 45000 },
            { id: 2, make: 'Chevrolet', model: 'Malibu', year: 2011, color: 'blue', price: 33000 }
        ];
    }

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.inject([
        '$rootScope', '$compile', '$httpBackend',
        function($rootScope, $compile, $httpBackend) {

            mockScope = $rootScope.$new(true);
            compileSvc = $compile;
            httpBackendSvc = $httpBackend;
        },
    ]));

    it('dom structure', function() {

        var linkingFn = compileSvc('<main></main>');
        var componentElement = linkingFn(mockScope);

        httpBackendSvc.expectGET('http://localhost:3010/colors').respond(getColorData());
        httpBackendSvc.expectGET('http://localhost:3010/cars').respond(getCarData());

        mockScope.$digest();
        httpBackendSvc.flush();

        expect(componentElement.find('color-tool').find('h1').text()).toBe('Color Tool');
        expect(componentElement.find('car-tool').find('h1').text()).toBe('Car Tool');
    });

    afterEach(function() {

        httpBackendSvc.verifyNoOutstandingRequest();
        httpBackendSvc.verifyNoOutstandingExpectation();
    });

});

