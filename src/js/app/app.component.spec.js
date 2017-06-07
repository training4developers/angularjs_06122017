import 'angular';
import 'angular-mocks';

import { appModule } from './app.module';

describe('app component tests', () => {

    let mockScope = null;
    let compileSvc = null;

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.inject([
        '$rootScope', '$compile',
        ($rootScope, $compile) => {

            mockScope = $rootScope.$new(true);
            compileSvc = $compile;
        },
    ]));

    it('dom structure', () => {

        const linkingFn = compileSvc('<main></main>');
        const componentElement = linkingFn(mockScope);

        mockScope.$digest();

        expect(componentElement.find('h1').text(), 'Hello World!');
    });

});

