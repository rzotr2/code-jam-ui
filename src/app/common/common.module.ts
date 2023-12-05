import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormFieldErrorsComponent} from './components/form-field-errors/form-field-errors.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormFieldErrorsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormFieldErrorsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatFormFieldModule
  ]
})
export class AppCommonModule {
}
