import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormUserCreateComponent } from './checkout-form-user-create.component';

describe('CheckoutFormUserCreateComponent', () => {
  let component: CheckoutFormUserCreateComponent;
  let fixture: ComponentFixture<CheckoutFormUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFormUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
