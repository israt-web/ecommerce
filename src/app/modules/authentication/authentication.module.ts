import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProjectCommonModule } from 'src/app/project-common/project-common.module';
// import { MaterialModule } from 'src/app/material/material.module';
import { AuthService} from './services/auth.service';
import {UserService } from './services/user.service';
import { fakeBackendProvider} from '../authentication/fake-backend';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  JwtInterceptor} from './jwt-interceptor'
@NgModule({
  declarations: [SigninComponent, SignupComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ProjectCommonModule,
    HttpClientModule

  ],
  providers: [
    UserService,
    AuthService,
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class AuthenticationModule { }
