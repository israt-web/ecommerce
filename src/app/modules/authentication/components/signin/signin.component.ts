import { SignupComponent } from './../signup/signup.component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  type: FormControl;
  emailId: FormControl;
  mobileNumber: FormControl;
  password: FormControl;
  userId: FormControl;
  isMobileLogin: boolean;
  loginTypeIcon: string;
  loginLabel: string;
  loginPlaceholder: string;
  passwordPlaceHolder: string;
  emailRegEx: any;
  hidePassword : boolean;
  loginRequest: any;

  constructor( public fb: FormBuilder,  
               public dialogRef: MatDialogRef<SigninComponent>,
               public dialog: MatDialog,
               private authService: AuthService,
               private router: Router
   ) { }

  ngOnInit(): void {
  this.createRegistraionForm();
  this.hidePassword = true;
  this.isMobileLogin = false;
  this.loginTypeIcon = 'email';
  this.loginLabel = 'Email';
  this.loginPlaceholder = 'Enter your email';
  this.passwordPlaceHolder = 'Enter your password';
  setTimeout(() => {   this.setLoginFormValidator();  }, 100);

  }

createRegistraionForm(){
  this.loginForm = this.fb.group({
    type: ['' , Validators.required],
    // emailId: ['' ,[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    // mobileNumber: ['' , Validators.required],
    userId: ['' , Validators.email], 
    password: ['' , Validators.required]
  });
}


setLoginFormValidator() {
  this.loginForm.get('type').setValue('email');
  let userId = this.loginForm.get('userId');
  userId.clearValidators();
  userId.setValidators([Validators.required , Validators.email]);
  userId.setValue('');
  userId.updateValueAndValidity();
  this.loginForm.get('type').valueChanges.subscribe(change => {
    let validators: ValidatorFn[];
    switch (change) {
      case 'email':
        validators = [Validators.email, Validators.required];
        this.isMobileLogin = false;
        break;

      case 'mobile':
        validators = [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^\d+$/)];
        this.isMobileLogin = true;
        break;
    }
    this.loginTypeIcon = (this.isMobileLogin) ? 'phone_android' : 'email';
    this.loginLabel = (this.isMobileLogin) ? 'Mobile' : 'Email';
    this.loginPlaceholder = (this.isMobileLogin) ? 'Enter your mobile' : 'Enter your email';
    userId = this.loginForm.get('userId');
    userId.clearValidators();
    userId.setValidators(validators);
    userId.setValue('');
    userId.updateValueAndValidity();
  });

}


  /**
   * To frame login request schema
   */
  private setLoginRequestData () {
    const mobile =  this.loginForm.value.userId;
    this.loginRequest = {
      userName : this.isMobileLogin ? mobile : this.loginForm.value.userId,
      password : this.loginForm.value.password,
      sessionId: '',
      type: this.loginForm.get('type').value
    };
  }



login() {
    console.log(this.loginForm.value);
    this.setLoginRequestData();
    this.authService.login(this.loginRequest).subscribe(response =>{

    })
    
  
}
onNoClick(): void {
  this.dialogRef.close();
}
signupDialogBox(){
  const dialogRef = this.dialog.open(SignupComponent, {
    width: '400px',

  });
}
}
