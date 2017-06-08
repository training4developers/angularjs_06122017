CarToolController.$inject= [ 'Cars' ];

function CarToolController(carsSvc) {

    var vm = this;

    vm.carsSvc = carsSvc;

    vm.headerText = 'Car Tool';

    function refreshCars() {
        vm.carsSvc.all().then(function (results) {
            vm.cars = results.data;
        });
    }

    vm.addCar = function AddCar(newCar) {

        return vm.carsSvc.insert(newCar).then(function() {
            return refreshCars();
        });
    };

    refreshCars();
}

export var carToolComponent = [ 'carTool', {
    templateUrl: 'app/components/car-tool/car-tool.component.html',
    controller: CarToolController
} ];