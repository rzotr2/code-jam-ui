import {Inject, Injectable} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FormGroup, Validators} from '@angular/forms';

import {APP_CONSTANTS, AppConstantsType} from '@common';

export interface LoginFormGroup {
  name: FormControl<string>;
  password: FormControl<string>;
}

@Injectable()
export class LoginFormBuilderService {
  public readonly nameErrorsMap = this.CONSTANTS.ErrorMaps.UsernameErrorsMap;
  public readonly passwordErrorsMap = this.CONSTANTS.ErrorMaps.PasswordErrorsMap;

  constructor(
    private fb: FormBuilder,
    @Inject(APP_CONSTANTS) private readonly CONSTANTS: AppConstantsType,
  ) {
  }

  public init(): FormGroup<LoginFormGroup> {
    return this.fb.group({
      name: this.fb.control(
        null,
        [
          Validators.required,
        ]
      ),
      password: this.fb.control(
        null,
        [
          Validators.required,
        ]
      ),
    });
  }

  public getNameControl(loginFormGroup: FormGroup): FormControl<string> {
    return loginFormGroup.get('name') as FormControl<string>;
  }

  public getPasswordControl(loginFormGroup: FormGroup): FormControl<string> {
    return loginFormGroup.get('password') as FormControl<string>;
  }
}
