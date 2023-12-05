import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const AppValidators = {
  blankSpaceValidator: (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      return control?.value?.includes(' ') ? {blankSpaces: true} : null;
    };
  }
};
