import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormApplicantCreateComponent } from './checkout-form-applicant-create.component';

describe('CheckoutFormApplicantCreateComponent', () => {
  let component: CheckoutFormApplicantCreateComponent;
  let fixture: ComponentFixture<CheckoutFormApplicantCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFormApplicantCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormApplicantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
