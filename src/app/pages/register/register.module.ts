import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {AppCommonModule} from '@common';
import {AuthRestModule} from '@auth-dl';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AppCommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AuthRestModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule {
}
