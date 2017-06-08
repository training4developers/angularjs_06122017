function ColorFormController() {

    var vm = this;

    vm.submitColor = function (color) {
        vm.onSubmitColor(color).then(function () {
            vm.color = '';
        });
    };
}

export var colorFormComponent = ['colorForm', {
    templateUrl: 'app/components/color-form/color-form.component.html',
    bindings: {
        onSubmitColor: '&'
    },
    controller: ColorFormController
} ];