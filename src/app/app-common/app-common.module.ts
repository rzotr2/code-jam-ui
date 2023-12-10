import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorsComponent } from './components/form-field-errors/form-field-errors.component';
import { MergeObjectsPipe } from './pipes/merge-objects.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    FormFieldErrorsComponent,
    MergeObjectsPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldErrorsComponent,
    MergeObjectsPipe,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppCommonModule {}
