import { componentHelper } from './utils/component';

AppComponent.$inject= [ 'Colors' ];

function AppComponent(colorsSvc) {

    this.colorsSvc = colorsSvc;

    var vm = this;


    vm.headerText = 'Color Tool';

    // vm.lastColors = null;
    //vm.colors = [ 'black', 'white', 'red', 'green', 'saffron', 'blue' ];

    vm.addColor = function(newColor) {
        vm.colors = vm.colors.concat(newColor);    
    };

    this.colorsSvc.all().then(function(results) {
        vm.colors = results.data.map(function(color) { return color.name; });
    });

    // vm.sortedColors = function() {
    //     if (vm.colors !== vm.lastColors) {
    //         vm.colors.sort();
    //         vm.lastColors = vm.colors;
    //     }
    //     return vm.colors;
    // };

}

export var appComponent = [ 'main', {
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
} ];