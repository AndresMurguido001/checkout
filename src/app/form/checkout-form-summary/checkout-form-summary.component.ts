import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { orderSummaryAnimation, rotateBtnAnimation } from '../../shared/animations';
import { Observable } from 'rxjs';
import { Applicant } from '../models/Applicant';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';
import { User } from '../models/User';


@Component({
  selector: 'app-checkout-form-summary',
  templateUrl: './checkout-form-summary.component.html',
  styleUrls: ['./checkout-form-summary.component.scss'],
  animations: [
    orderSummaryAnimation,
    rotateBtnAnimation
  ]
})
export class CheckoutFormSummaryComponent implements OnInit, OnDestroy {
  public user: Observable<User>;
  public applicants: Observable<Applicant[]>; 
  
  isOpen: boolean;

  constructor(private checkoutService: CheckoutFormService) { }

  ngOnInit() {
    this.applicants = this.checkoutService.applicants
    this.user = this.checkoutService.user;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.checkoutService.unsubscribe();
  }

  toggleSummary(){
    this.isOpen = !this.isOpen;
  }

}
