import { SignupComponent } from './../signup/signup.component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  emailId: FormControl;
  password: FormControl;
  constructor( public fb: FormBuilder,  public dialogRef: MatDialogRef<SigninComponent>,
               public dialog: MatDialog,private authService: AuthService,private router: Router
   ) { }

  ngOnInit(): void {
  this.createRegistraionForm();
  }

createRegistraionForm(){
  this.loginForm = this.fb.group({
    emailId: ['' ,[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['' , Validators.required]
  });
}

  onSubmit() {
    console.log(this.loginForm.value);
    const token = this.authService.authUser(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      // this.alertify.success('Login Successful');
      this.router.navigate(['/']);
    }
}
onNoClick(): void {
  this.dialogRef.close();
}
signup(){
  const dialogRef = this.dialog.open(SignupComponent, {
    width: '400px',

  });
}
}
