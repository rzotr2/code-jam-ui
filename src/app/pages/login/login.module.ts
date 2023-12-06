import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {AppCommonModule} from '@common';
import {AuthRestModule} from '@auth-dl';

import {LoginFormComponent} from './components/login-form/login-form.component';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    AuthRestModule
  ]
})
export class LoginModule {
}
