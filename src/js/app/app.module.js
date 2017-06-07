import { createModule } from './utils/component';

import { colorsService } from './services/colors.service';
import { appComponent } from './app.component';
import { toolHeaderComponent } from './components/tool-header/tool-header.component';
import { unorderedListComponent } from './components/unordered-list/unordered-list.component';
import { colorFormComponent } from './components/color-form/color-form.component';

function Config(baseURL) {
    this.baseURL = baseURL;
}

// function Config2() {
//     this.baseURL = 'http://localhost:3010';
// }

export var appModule = createModule('App', [])
    .constant('baseURL', 'http://localhost:3010')
    // .value('config', new Config('http://localhost:3010'))
    // when I need to have logic to help instantiate
    // .factory('config', function(baseURL) {

    //     if (true) {
    //         return new Config(baseURL);
    //     } else {
    //         return new Config2(baseURL);
    //     }
    // })
    // no logic needed just instantiate
    // .service('config', Config)
    // .service('somesvc', function() {
    //     return {

    //     };
    // })
    // .config(function( baseURL ) {
    //     console.log(baseURL);
    // })
    // .run(function( baseURL ) {
    //     console.log(baseURL);
    // })
    .provider('Config', function() {

        // you can write code which produces and configures
        // the provider object itself

        return {
            // factory function
            $get: function(baseURL) {
                return new Config(baseURL);
            }
        };

    })
    .service(colorsService[0], colorsService[1])
    .component(appComponent[0], appComponent[1])
    .directive(toolHeaderComponent[0], toolHeaderComponent[1])
    .directive(unorderedListComponent[0], unorderedListComponent[1])
    .directive(colorFormComponent[0], colorFormComponent[1]);
