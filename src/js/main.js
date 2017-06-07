import 'angular';

import 'bootstrap-loader';
import '../css/styles.scss';

import { appModule } from './app/app.module';

document.addEventListener('DOMContentLoaded', function() {

    console.dir(angular);

    angular.bootstrap(document.querySelector('main'), [ appModule.name ]);

});