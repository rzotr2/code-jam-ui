import {Component, Inject, Input} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

import {APP_CONSTANTS, AppConstantsType} from '../../constants';

@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss']
})
export class FormFieldErrorsComponent {
  @Input() shouldShow = true;
  @Input() errorsMap: Record<string, string> = this.CONSTANTS.ErrorMaps.DefaultErrorsMap;
  @Input() validationErrors: ValidationErrors = {};
  @Input() formErrors: ValidationErrors = {};

  constructor(
    @Inject(APP_CONSTANTS) private readonly CONSTANTS: AppConstantsType,
  ) {
  }
}
