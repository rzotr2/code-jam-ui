import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppCommonModule} from "../../../../app-common/app-common.module";



@NgModule({
    declarations: [
        LoginFormComponent
    ],
    exports: [
        LoginFormComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule
  ]
})
export class LoginFormModule { }
