import {Inject, Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';

import {APP_CONSTANTS, AppConstantsType, AppValidators} from '@common';

export interface RegisterFormGroup {
  name: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
}

export class RepeatPasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.touched);

    return control.touched && (invalidCtrl || (control?.parent?.errors && control?.parent?.errors['notEqual']));
  }
}

@Injectable()
export class RegisterFormBuilderService {
  public readonly nameErrorsMap = this.CONSTANTS.ErrorMaps.UsernameErrorsMap;
  public readonly passwordErrorsMap = this.CONSTANTS.ErrorMaps.PasswordErrorsMap;
  public readonly repeatPasswordErrorsMap = this.CONSTANTS.ErrorMaps.RepeatPasswordErrorsMap;

  constructor(
    private fb: FormBuilder,
    @Inject(APP_CONSTANTS) private readonly CONSTANTS: AppConstantsType,
  ) {
  }

  public init(): FormGroup<RegisterFormGroup> {
    return this.fb.group({
      name: this.fb.control(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          AppValidators.blankSpaceValidator()
        ]
      ),
      password: this.fb.control(
        '',
        [
          Validators.required,
          Validators.pattern(this.CONSTANTS.PATTERN_CONSTANTS.STRONG_PASSWORD),
        ]
      ),
      repeatPassword: this.fb.control(''),
    }, { validators: [AppValidators.isValueEqualValidator('repeatPassword', 'password')] });
  }

  public getNameControl(registerFormGroup: FormGroup): FormControl<string> {
    return registerFormGroup.get('name') as FormControl<string>;
  }

  public getPasswordControl(registerFormGroup: FormGroup): FormControl<string> {
    return registerFormGroup.get('password') as FormControl<string>;
  }

  public getRepeatPasswordControl(registerFormGroup: FormGroup): FormControl<string> {
    return registerFormGroup.get('repeatPassword') as FormControl<string>;
  }

  public getRepeatPasswordMatcher(): RepeatPasswordErrorStateMatcher {
    return new RepeatPasswordErrorStateMatcher();
  }
}
