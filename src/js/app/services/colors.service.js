import { extendsHelper } from '../utils/prototype-inheritance';
import { BaseREST } from './base-rest.service';

Colors.$inject = [ 'baseUrl', '$http' ];

function Colors(baseUrl, $http) {
    this._super.call(this, $http, baseUrl + '/colors');
}

extendsHelper(Colors, BaseREST);

export var colorsService = [ 'Colors',  Colors ];
