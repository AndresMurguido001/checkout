import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { Addon, Product } from '../models/Product';
import { Applicant } from '../models/Applicant';
import { MatStepper } from '@angular/material';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { nextLoginStep, substepAnimation } from '../../shared/animations'
import { FormStep } from 'src/app/shared/types';
 

@Component({
  selector: 'app-checkout-form-applicant-create',
  templateUrl: './checkout-form-applicant-create.component.html',
  styleUrls: ['../styles/_form.scss','./checkout-form-applicant-create.component.scss'],
  animations: [
    nextLoginStep,
    substepAnimation
  ]
})
export class CheckoutFormApplicantCreateComponent implements OnInit, OnDestroy {

  @Output() applicantCreated = new EventEmitter<any>();
  @Output() productCreated   = new EventEmitter<any>();

  applicantForm: FormGroup;
  productsForm: FormGroup;
  addons: Observable<Addon[]>;
  public products: Observable<Product[]>;
  user: User;
  applicant: Applicant;

  // Animation Properties
  @Input('currentStep') currentStep: FormStep;
  // Substep Properties
  public substeps: FormStep[];
  public currentAction: string;
  public activeSubstepIndex: number;

  passportTypes = [
    "Child Passport",
    "Damaged Passport",
    "Passport Renewal",
    "Second Passport",
    "Lost Passport",
    "Name Change",
    "Stolen Passport"
  ];


  constructor(
    private formBuilder: FormBuilder, 
    private service: CheckoutFormService,
    private formContainer: FormGroupDirective,
    ) { 
      this.products = service.products
      this.addons = service.addons
  }

  ngOnInit() {

    this.substeps = this.currentStep.steps;
    this.activeSubstepIndex = 0;
    this.currentAction = "Next Section"

    this.applicantForm = this.formContainer.form;
      this.applicantForm.addControl('applicant', 
        this.formBuilder.group({
          firstname: ["", Validators.required],
          lastname: ["", Validators.required],
          departureDate: ["", Validators.required],
          destination: ["", Validators.required],
        })
      )

      this.productsForm = this.formBuilder.group({
        passportType: ["", Validators.required],
        expeditingService: ["", Validators.required],
        addons: this.formBuilder.array([])
      })
      this.service.user.subscribe(user => {
        this.user = user;
      });
  }


  ngOnDestroy(): void {
    this.service.unsubscribe();
  }
  onApplicantSubmit(stepper: MatStepper){
    this.applicantCreated.emit({ applicant: this.applicantForm.value, id: this.user.id});
    stepper.next();
  }

  onProductCreate(stepper: MatStepper){
    console.log("PRODUCTS FORM VALUE: ", this.productsForm.value);
    this.productCreated.emit(this.productsForm.value);
    // this.applicantForm.reset();
    // this.productsForm.reset();
    stepper.reset();
  }

  addAddon(addon: Addon) {
   let addonForms = this.productsForm.get('addons') as FormArray;
   addonForms.push(this.formBuilder.group({
     price: addon.price,
     description: addon.description,
     name: addon.name
   }))
  }

  checkFormsAndContinue(stepper: MatStepper){
    if(this.applicantForm.value && this.productsForm.value) {
      this.onApplicantSubmit(stepper);
      this.onProductCreate(stepper);
    } else {
      stepper.next();
    }
  }

  public currentStepAction() {
    console.log(this.substeps);
    console.log(this.activeSubstepIndex)
    this.substeps[this.activeSubstepIndex].active = false;
    if (this.activeSubstepIndex < this.substeps.length - 1) {
      this.substeps[this.activeSubstepIndex + 1].active = true
      this.activeSubstepIndex += 1;
    } else {
      console.log("DONE");
    }
  }
}
