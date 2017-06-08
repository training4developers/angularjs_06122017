export var carFormComponent = ['carForm', {
    template: require('./car-form.component.html'),
    bindings: {
        onSubmitCar: '&',
    },
    controller: function () {

        var vm = this;

        vm.car = {
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0
        };

        vm.submitCar = function (ccar) {
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
}];