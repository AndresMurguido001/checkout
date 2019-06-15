import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginFormData } from 'src/app/shared/types';
import { nextLoginStep } from 'src/app/shared/animations';

@Component({
  selector: 'app-checkout-form-user-create',
  templateUrl: './checkout-form-user-create.component.html',
  styleUrls: ['../styles/_form.scss', './checkout-form-user-create.component.scss'],
  animations: [
    nextLoginStep
  ]
})
export class CheckoutFormUserCreateComponent implements OnInit {

  public completed = false;
  userForm: FormGroup;
  // loginForm: FormGroup;
  @Output() createUser = new EventEmitter<any>();
  @Output() loginUser = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder, 
    private formContainer: FormGroupDirective,
    public dialog: MatDialog,
    ) { 
    
  }

  ngOnInit() {
    this.userForm = this.formContainer.form;
    this.userForm.addControl('signup', 
      this.fb.group({
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6)]]
      })
    )
  }

  onSubmit(){
    this.completed = true;
    this.createUser.emit(this.userForm.controls.signup.value);
  }

  openLoginDialog() {
    
    let dialogRef = this.dialog.open(LoginFormComponent, {
      panelClass: "login-form__dialog",
      data: this.formContainer
    })
    let sub = dialogRef.componentInstance.loginFormSubmitted.subscribe((data: LoginFormData) => {
      this.loginUser.emit(data);
      dialogRef.close();
    })

    dialogRef.afterClosed().subscribe(() => sub.unsubscribe())
  }

}
