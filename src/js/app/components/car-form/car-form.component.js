function CarFormController() {

    var vm = this;

    vm.car = {
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0
    };

    vm.submitCar = function (car) {
        vm.onSubmitCar(car).then(function () {
            vm.car = {
                make: '',
                model: '',
                year: 1900,
                color: '',
                price: 0
            };
        });
    };
}

export var carFormComponent = ['carForm', {
    templateUrl: 'app/components/car-form/car-form.component.html',
    bindings: {
        onSubmitCar: '&',
    },
    controller: CarFormController
} ];