import 'angular';
import 'angular-mocks';

import { appModule } from '../../app.module';

describe('unordered list component tests', function() {

    var mockScope = null;
    var compileSvc = null;

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.inject([
        '$rootScope', '$compile',
        function($rootScope, $compile) {

            mockScope = $rootScope.$new(true);
            compileSvc = $compile;

            mockScope.items = [ 'red', 'green', 'blue' ];
        },
    ]));

    it('dom structure', function() {

        var linkingFn = compileSvc('<unordered-list items="items"></unordered-list>');
        var componentElement = linkingFn(mockScope);

        mockScope.$digest();

        expect(componentElement.find('ul')[0].children.length).toBe(3);
    });
    

});