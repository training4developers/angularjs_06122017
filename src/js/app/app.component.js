import { componentHelper } from './utils/component';

AppComponent.$inject= [ 'Colors' ];

function AppComponent(colorsSvc) {

    var vm = this;

    vm.colorsSvc = colorsSvc;

    vm.headerText = 'Color Tool';

    function refreshColors() {
        vm.colorsSvc.all().then(function (results) {
            vm.colors = results.data.map(function (color) { return color.name; });
        });
    }

    vm.addColor = function (newColor) {

        return vm.colorsSvc.insert({
            name: newColor
        }).then(function() {
            return refreshColors();
        });
    };

    refreshColors();
}

export var appComponent = [ 'main', {
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
} ];