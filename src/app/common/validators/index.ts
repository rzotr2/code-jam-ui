import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const AppValidators = {
  blankSpaceValidator: (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      return control?.value?.includes(' ') ? {blankSpaces: true} : null;
    };
  },
  isValueEqualValidator: (keyOne: string, keyTwo: string): ValidatorFn => {
    return (form: FormGroup): ValidationErrors | null => {
      const control = form.get(keyOne);
      const dependsOnControl = form.get(keyTwo);

      return control.value === dependsOnControl.value ? {} : {notEqual: [keyOne, keyTwo]};
    };
  }
};
