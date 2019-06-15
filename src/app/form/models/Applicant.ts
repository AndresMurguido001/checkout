import { Product } from './Product';

export class Applicant {
    public id: number;
    public firstname: string;
    public lastname: string;
    public products: Product[]
    public departureDate?: Date
    public destination?: string;

    constructor(firstname: string, lastname: string, departureDate: Date, destination: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.departureDate = departureDate;
        this.destination = destination;
        this.products = [];
    }
}