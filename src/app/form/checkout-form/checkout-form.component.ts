import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { MatStepper } from '@angular/material';
import { Product } from '../models/Product';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginFormData } from 'src/app/shared/types';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['../styles/_form.scss','./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  formContainer: FormGroup;
  formsValid: FormGroup;
  editable: boolean = true;
  formSteps = [{ step: 1, active: true }, { step: 2, active: false }, { step: 3, active: false }, { step: 4, active: false }];

  constructor(private formService: CheckoutFormService, private _fb: FormBuilder) {
   }

  ngOnInit() {
    this.formContainer = this._fb.group({});
    this.formsValid = this._fb.group({
      signup: ["", Validators.required],
      login: ["", Validators.required]
    })
  }

  createUser(user: User){
    this.editable = false;
    this.incrementStep()
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

    incrementStep() {
      let newActiveIndex = 0;
      let totalSteps = this.formSteps.length;
      this.formSteps = this.formSteps.map((step, index) => {
        if (step.active && index < totalSteps) {
          step.active = false;
          newActiveIndex = index + 1;
        }
        if (index === newActiveIndex) {
          step.active = true;
        }
        return step;
      })
    }

}
