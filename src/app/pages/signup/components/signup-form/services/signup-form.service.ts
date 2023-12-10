import { Injectable } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Injectable()
export class SignupFormService {
  constructor(
    private fb: FormBuilder
  ) {}

  createSignUpForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
      repeatPassword: this.fb.control(''),
    }, {validators: [this.getComparePasswordsValidator()]})
  }

  public getNameControl(formGroup: FormGroup): FormControl {
    return formGroup.get('name') as FormControl;
  }

  public getPassword(formGroup: FormGroup): FormControl {
    return formGroup.get('password') as FormControl;
  }

  public getRepeatPassword(formGroup: FormGroup): FormControl {
    return formGroup.get('repeatPassword') as FormControl;
  }

  public getComparePasswordsValidator(): ValidatorFn {
    return ((formGroup: FormGroup): ValidationErrors | null => {
      const password: FormControl<string> = this.getPassword(formGroup);
      const repeatPassword: FormControl<string> = this.getRepeatPassword(formGroup);
      return password.value === repeatPassword.value ? null : {passwordsMismatch: true}
    })
  }
}
