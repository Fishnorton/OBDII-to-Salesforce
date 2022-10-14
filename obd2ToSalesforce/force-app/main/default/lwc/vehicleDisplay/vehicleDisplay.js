import { LightningElement, track, wire } from 'lwc';
import sfdc_fetchCars from '@salesforce/apex/FetchCars.getCarsFromUser';

export default class VehicleDisplay extends LightningElement {
    @track car;
    
    get carLink() {
        return '/' + this.car.Id
    }

    @wire(sfdc_fetchCars)
    wiredCars(cars) {
        this.car =cars;
    }
}