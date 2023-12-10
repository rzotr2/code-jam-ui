import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class LoginFormService {

  constructor(
    private fb: FormBuilder
  ) {}

  createLoginForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required)
    })
  }

  public getNameControl(formGroup: FormGroup): FormControl {
    return formGroup.get('name') as FormControl;
  }

  public getPassword(formGroup: FormGroup): FormControl {
    return formGroup.get('password') as FormControl;
  }
}
