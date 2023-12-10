import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {LoginFormModule} from "./components/login-form/login-form.module";
import {AuthRestModule} from "../../services/auth-rest/auth-rest.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        LoginRoutingModule,
        LoginFormModule,
        AuthRestModule
    ],
})
export class LoginModule { }
