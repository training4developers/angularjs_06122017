import 'angular';
import 'angular-mocks';

import { appModule } from '../../app.module';

describe('color tool component tests', function() {

    var rootScopeSvc;
    var injectorSvc;
    var colorsSvc;
    var qSvc;

    var colorToolComponent;
    var colorToolController;

    var mockColorData = [
        { id: 1, name: 'blue' },
        { id: 2, name: 'yellow' },
        { id: 3, name: 'red' }
    ];

    // load module
    beforeEach(angular.mock.module(appModule.name));

    // load services
    beforeEach(angular.mock.inject([
        '$rootScope', '$injector', 'Colors', '$q',
        function($rootScope, $injector, Colors, $q) {
            rootScopeSvc = $rootScope;
            injectorSvc = $injector;
            colorsSvc = Colors;
            qSvc = $q;
        }
    ]));

    // configure spies
    beforeEach(function(done) {

        spyOn(colorsSvc, 'all').and.returnValue(qSvc(function(resolve) {

            setTimeout(function() {
                resolve({ data: mockColorData});
                done();
            }, 0);
        }));

        spyOn(colorsSvc, 'insert').and.callFake(function(color) {

            return qSvc(function(resolve) {

                color.id = mockColorData.reduce( (maxId, color) => Math.max(maxId, color.id), 0) + 1;

                setTimeout(function() {
                    resolve({ data: mockColorData.concat(color) });
                    done();
                }, 0);
            });

        });

    });
    

    // load component
    beforeEach(function() {

        // inject the compponent
        colorToolComponent = injectorSvc.get('colorToolDirective')[0];

        // instantiate the controller on the directive
        colorToolController = injectorSvc.instantiate(colorToolComponent.controller, {
            $scope: rootScopeSvc.$new(true),
            colorsSvc,
        });

        rootScopeSvc.$digest();
    });

    it('controller shape', function() {
        expect(colorToolController.colorsSvc).toBe(colorsSvc);
        expect(colorToolController.headerText).toBe('Color Tool');
        expect(colorToolController.addColor).toBeDefined();
    });

    it('get all colors', function() {
        expect(colorsSvc.all).toHaveBeenCalled();
        expect(colorToolController.colors.length).toBe(3);
    });

    it('insert color', function() {

        var newColor = 'green';

        colorToolController.addColor(newColor);

        expect(colorsSvc.insert).toHaveBeenCalledWith({
            name: newColor,
            id: 4
        });
        expect(colorsSvc.all).toHaveBeenCalled();
    });


});