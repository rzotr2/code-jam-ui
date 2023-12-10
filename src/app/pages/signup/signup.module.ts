import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import {SignUpRoutingModule} from "./signup-routing.module";
import {AppCommonModule} from "../../app-common/app-common.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRestModule} from "../../services/auth-rest/auth-rest.module";
import {SignupFormComponent} from "./components/signup-form/signup-form.component";



@NgModule({
  declarations: [
    SignupComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    AppCommonModule,
    ReactiveFormsModule,
    AuthRestModule
  ]
})
export class SignupModule { }
