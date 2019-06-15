import { Injectable } from '@angular/core';
import { User } from '../form/models/User';
import { Applicant } from '../form/models/Applicant';
import { Product, Addon } from '../form/models/Product';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  success: {
    token?: string;
    user?: User;
  },
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormService {
  private _user: BehaviorSubject<User>;
  private _applicants: BehaviorSubject<Applicant[]>;
  private _products: BehaviorSubject<Product[]>;
  private _addons:BehaviorSubject<Addon[]>;

  private dataSource: {
    applicants: Applicant[],
    products: Product[],
    user: User,
    token: string,
    addons: Addon[]
  }

  user: Observable<User>;
  applicants: Observable<Applicant[]>;
  products: Observable<Product[]>;
  addons: Observable<Addon[]>;

  private baseUrl = 'http://fastport_api.test/api'

  constructor(private http: HttpClient) { 
    this.dataSource = {
      applicants: [],
      products: [],
      user: new User(),
      token: "",
      addons: []
    }

    this._user = new BehaviorSubject<User>(new User());
    this._applicants = new BehaviorSubject<Applicant[]>([]);
    this._products = new BehaviorSubject<Product[]>([]);
    this._addons = new BehaviorSubject<Addon[]>([]);

    this.user = this._user.asObservable();
    this.applicants = this._applicants.asObservable();
    this.products = this._products.asObservable();
    this.addons = this._addons.asObservable();

    this.getProducts();
    this.getProductAddons();

  }

  createUser(user: User) {
    this.http.post(`${this.baseUrl}/register`, user).subscribe((data: ApiResponse) => {
      this.dataSource.token = data.success.token;
      this.dataSource.user = data.success.user;
      this._user.next({...this.dataSource}.user)
    }, error => console.log(`ERROR: could not create user bc: ${error}`));
      // this.user = new User(user.firstname, user.lastname, user.email, user.password);
  }

  loginUser({ email, password }){
    console.log("LOGIN USER: ", email, password);
    this.http.post(`${this.baseUrl}/login`, {email, password}).subscribe((data: ApiResponse) => {
      this.dataSource.token = data.success.token
      this.dataSource.user = data.success.user
      this._user.next({...this.dataSource}.user);
    }, error => console.log(`ERROR: could not login user bc: ${error}`));
  }

  createApplicant(applicant: Applicant){
    this.http.post(`${this.baseUrl}/user/applicant/create`, applicant, {
      headers: {
        'Accept': "application/json",
        "Authorization": `Bearer ${this.dataSource.token}`
      }
    }).subscribe((data: Applicant) => {
      this.dataSource.applicants.push(data);
      this._applicants.next({...this.dataSource}.applicants);
    }, error => console.log(`ERROR: could not create applicant bc: ${JSON.stringify(error)}`));
  }

  unsubscribe(){
    this._user.unsubscribe();
    this._applicants.unsubscribe();
    this._products.unsubscribe();
  }

  createProduct(product: Product){
    let applicant = this.dataSource.applicants[this.dataSource.applicants.length - 1];
    this.http.post(`${this.baseUrl}/user/applicant/${applicant.id}/product/create`, product, {
      headers: {
        'Accept': "application/json",
        "Authorization": `Bearer ${this.dataSource.token}`
      }
    }).subscribe((product: Product) => {
      this.dataSource.products.push(product);
      this._products.next({...this.dataSource}.products)
    })
  }

  getProductAddons(){
    return this.http.get(`${this.baseUrl}/user/applicants/addons`).subscribe((addons: Addon[]) => {
      this.dataSource.addons = addons;
      this._addons.next({...this.dataSource}.addons);
    }, error => console.log(`ERROR: could not get products bc: ${error}`));
  }

  getProducts(){
    this.http.get(`${this.baseUrl}/user/applicants/products`).subscribe((products:Product[]) => {
      this.dataSource.products = products;
      this._products.next({...this.dataSource}.products);
    }, error => console.log(`ERROR: could not get products bc: ${error}`))
  }

}
