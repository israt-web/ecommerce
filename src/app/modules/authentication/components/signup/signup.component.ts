import { SigninComponent } from './../signin/signin.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  emailId: FormControl;
  mobileNumber: FormControl;
  name: FormControl;
  // password: FormControl;
  user: User;
  userSubmitted: boolean;
  constructor(public fb: FormBuilder, private router: Router,
              private userService: UserService, public dialog: MatDialog,public dialogRef: MatDialogRef<SignupComponent>
   ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.signupForm = this.fb.group({
      emailId: ['' , [Validators.required, Validators.email]],
      mobileNumber: ['' ,Validators.required, ],
      name: ['' , Validators.required],
      password: ['' , Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  // get f() { return this.signupForm.controls; }


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onSubmit(){
    console.log(this.signupForm.value);
    this.userSubmitted = true;

    if (this.signupForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.onReset();
      // this.alertify.success('Congrats, you are successfully registered');
  }
  }
  onReset() {
    this.userSubmitted = false;
    this.signupForm.reset();
  }


  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

   // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.signupForm.get('userName') as FormControl;
  }

  get email() {
    return this.signupForm.get('email') as FormControl;
  }
  get password() {
    return this.signupForm.get('password') as FormControl;
  }
  // get confirmPassword() {
  //   return this.signupForm.get('confirmPassword') as FormControl;
  // }
  get mobile() {
    return this.signupForm.get('mobile') as FormControl;
  }
  // ------------------------


  login(){
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '400px',
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

//   ngAfterViewInit() {
//     this.onSubmit();
// }
}
