import { createModule } from './utils/component';

import { colorsService } from './services/colors.service';
import { carsService } from './services/cars.service';
import { appComponent } from './app.component';
import { toolHeaderComponent } from './components/tool-header/tool-header.component';
import { unorderedListComponent } from './components/unordered-list/unordered-list.component';
import { carTableComponent } from './components/car-table/car-table.component';
import { colorFormComponent } from './components/color-form/color-form.component';
import { carFormComponent } from './components/car-form/car-form.component';

export var appModule = createModule('App', [])
    .constant('baseUrl', 'http://localhost:3010')
    .service(colorsService[0], colorsService[1])
    .service(carsService[0], carsService[1])
    .component(appComponent[0], appComponent[1])
    .component(toolHeaderComponent[0], toolHeaderComponent[1])
    .component(unorderedListComponent[0], unorderedListComponent[1])
    .component(carTableComponent[0], carTableComponent[1])
    .component(colorFormComponent[0], colorFormComponent[1])
    .component(carFormComponent[0], carFormComponent[1]);
