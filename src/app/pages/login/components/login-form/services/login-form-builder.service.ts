import {Inject, Injectable} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FormGroup, Validators} from '@angular/forms';

import {APP_CONSTANTS, AppConstantsType, AppValidators} from '@common';

@Injectable()
export class LoginFormBuilderService {
  public readonly nameErrorsMap = this.CONSTANTS.ErrorMaps.UsernameErrorsMap;
  public readonly passwordErrorsMap = this.CONSTANTS.ErrorMaps.PasswordErrorsMap;

  constructor(
    private fb: FormBuilder,
    @Inject(APP_CONSTANTS) private readonly CONSTANTS: AppConstantsType,
  ) {
  }

  public init(): FormGroup {
    return this.fb.group({
      name: this.fb.control(
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          AppValidators.blankSpaceValidator()
        ]
      ),
      password: this.fb.control(
        null,
        [
          Validators.required,
          Validators.pattern(this.CONSTANTS.PATTERN_CONSTANTS.STRONG_PASSWORD),
        ]
      ),
    });
  }

  public getNameControl(loginFormGroup: FormGroup): FormControl {
    return loginFormGroup.get('name') as FormControl;
  }

  public getPasswordControl(loginFormGroup: FormGroup): FormControl {
    return loginFormGroup.get('password') as FormControl;
  }
}
