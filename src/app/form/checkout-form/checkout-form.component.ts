import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Product } from '../models/Product';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginFormData, FormStep } from 'src/app/shared/types';

import { incrementStep } from '../../shared/utils'

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['../styles/_form.scss','./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  formContainer: FormGroup;
  formsValid: FormGroup;
  editable: boolean = true;
  activeIndex: number;
  public formSteps: FormStep[] = [
    { step: 1, active: true }, 
    { step: 2, active: false, 
      steps: [
    { step: 1, active: true },
    { step: 2, active: false },
    { step: 3, active: false },
     ]}, 
     { step: 3, active: false }, 
     { step: 4, active: false }];

  constructor(private formService: CheckoutFormService, private _fb: FormBuilder) {
    
   }

  ngOnInit() {
    this.activeIndex = 0;
    this.formContainer = this._fb.group({});
    this.formsValid = this._fb.group({
      signup: ["", Validators.required],
      login: ["", Validators.required]
    })
  }

  createUser(user: User){
    this.editable = false;
    this.formSteps = incrementStep(this.formSteps, this.activeIndex);
    // if (this.formContainer.controls.signup.valid) {
    //   this.formService.createUser(user);
    //   this.formsValid.setValue({
    //     signup: true,
    //     login: false
    //   })
    // }
  }

  loginUser(formValues: LoginFormData) {
    this.editable = false;
    this.formService.loginUser(formValues);
    this.formsValid.setValue({
      signup: false,
      login: true
    })
  }

  createApplicant(event: any) {
    console.log("APPLICANT: ", event.applicant);
    console.log("ID: ", event.id);
    this.formService.createApplicant(event.applicant);
  }

    createProduct(product: Product) {
      this.formService.createProduct(product);
    }

  }
