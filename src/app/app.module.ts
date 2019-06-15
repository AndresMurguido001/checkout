import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutFormComponent } from './form/checkout-form/checkout-form.component';
import { MatInputModule, MatDialogModule, MatSelectModule, MatToolbarModule, MatCardModule, MatStepperModule, MatButtonModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { CheckoutFormSummaryComponent } from './form/checkout-form-summary/checkout-form-summary.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutFormUserCreateComponent } from './form/checkout-form-user-create/checkout-form-user-create.component';
import { CheckoutFormApplicantCreateComponent } from './form/checkout-form-applicant-create/checkout-form-applicant-create.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentFormComponent } from './form/payment-form/payment-form.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { ResizeDirective } from './shared/resize.directive';
import { CheckoutFormStepsComponent } from './form/checkout-form-steps/checkout-form-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutFormComponent,
    CheckoutFormSummaryComponent,
    CheckoutFormUserCreateComponent,
    CheckoutFormApplicantCreateComponent,
    PaymentFormComponent,
    LoginFormComponent,
    ResizeDirective,
    CheckoutFormStepsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
  ],
  entryComponents: [LoginFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
