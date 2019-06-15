import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, ControlContainer } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // @Input() loginForm: FormGroup
  loginForm: FormGroup;
  @Output() loginFormSubmitted = new EventEmitter<any>();

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private formContainer: FormGroupDirective
    // private formContainer: FormGroupDirective
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formContainer.form;
    this.loginForm.addControl('login', 
      this._fb.group({
        email: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6)]]
      })
    )

    
  }

  onSubmit(){
    //console.log(this.loginForm.controls.login.value);
    this.loginFormSubmitted.emit(this.loginForm.controls.login.value);
  }

}
