import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormStepsComponent } from './checkout-form-steps.component';

describe('CheckoutFormStepsComponent', () => {
  let component: CheckoutFormStepsComponent;
  let fixture: ComponentFixture<CheckoutFormStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFormStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
