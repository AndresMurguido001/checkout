import { Applicant } from './Applicant';

enum PassportType {
    NEW_PASSPORT = "New Passport",
    PASSPORT_RENEWAL = "Passport Renewal",
    CHILD_PASSPORT = "Child Passport",
    LOST_PASSPORT = "Lost Passport",
    DAMAGED_PASSPORT = "Damaged Passport",
    NAME_CHANGE = "Name Change",
    SECOND_PASSPORT = "Second Passport",
    STOLEN_PASSPORT = "Stolen Passport"
}

export interface ExpeditingService {
    service: string;
    duration: string;
    price: number;
}

export interface Addon {
    price: number;
    name: string;
    description: string
}


export class Product {
    // public applicant: Applicant;
    public passportType: PassportType;
    public expeditingService: ExpeditingService;
    public addons: Addon[];

    constructor(passportType: PassportType, expeditingService: ExpeditingService, addon: Addon[]) {
        this.passportType = passportType;
        this.expeditingService = expeditingService;
        this.addons = addon;
    }
}