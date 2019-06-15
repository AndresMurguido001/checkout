import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-form-steps',
  templateUrl: './checkout-form-steps.component.html',
  styleUrls: ['../styles/_form.scss', './checkout-form-steps.component.scss']
})
export class CheckoutFormStepsComponent implements OnInit {
  @Input('steps') steps: Array<number>;

  constructor() { }

  ngOnInit() {
    
  }

}
