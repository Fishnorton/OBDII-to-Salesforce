import { LightningElement, track, wire } from 'lwc';
import uId from '@salesforce/user/Id';
import sfdc_fetchCars from '@salesforce/apex/FetchCars.getCarsFromUser';

export default class VehicleDisplay extends LightningElement {
    @track cars = [];

    connectedCallback() {
        console.log(uId);
        console.log(this.cars);
    }

    @wire(sfdc_fetchCars, {userId: '$uId'})
    wiredCars(returnedCars) {
        this.cars = returnedCars.data;
    }
}