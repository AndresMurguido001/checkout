import { Applicant } from './Applicant';

export class User {
    id: number;
    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;
    public applicants: Applicant[];

    constructor(
        firstname?: string,
        lastname?: string,
        email?: string,
        password?: string,
        applicants?: Applicant[]
    ) {
        this.firstname = firstname || "";
        this.lastname = lastname || "";
        this.email = email || "";
        this.password = password || "";
        this.applicants = applicants || [];
    }
}
