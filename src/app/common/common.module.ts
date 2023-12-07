import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {FormFieldErrorsComponent} from './components/form-field-errors/form-field-errors.component';
import {RoutingCommonService} from './services/routing-common.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MergeErrorsPipe} from './pipes/merge-errors.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormFieldErrorsComponent,
    MergeErrorsPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormFieldErrorsComponent,
    MergeErrorsPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatFormFieldModule
  ],
  providers: [RoutingCommonService]
})
export class AppCommonModule {
}
