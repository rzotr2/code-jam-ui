import {Component, Inject, Input} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

import {APP_CONSTANTS, AppConstants} from "../../constants";

@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss']
})
export class FormFieldErrorsComponent {
  @Input() public validationErrors: ValidationErrors = {};

  @Input() public errorMessagesMap  = this.appConstants.errorMessagesMap;

  @Input() public shouldBeShown = false;

  constructor(
    @Inject(APP_CONSTANTS) private appConstants: AppConstants,
  ) {}

}
