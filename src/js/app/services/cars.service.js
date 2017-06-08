import { extendsHelper } from '../utils/prototype-inheritance';
import { BaseREST } from './base-rest.service';

Cars.$inject = [ 'baseUrl', '$http' ];

function Cars(baseUrl, $http) {
    this._super.call(this, $http, baseUrl + '/cars');
}

extendsHelper(Cars, BaseREST);

export var carsService = ['Cars', Cars];
