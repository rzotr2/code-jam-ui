import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthRestService} from '@auth-dl';

import {RegisterFormBuilderService, RegisterFormGroup} from './services/register-form-builder.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [RegisterFormBuilderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  public hideMainPass = true;
  public hideRepeatPass = true;

  public registerFormGroup = this.registerFormBuilderService.init();
  public nameControl = this.registerFormBuilderService.getNameControl(this.registerFormGroup);
  public passwordControl = this.registerFormBuilderService.getPasswordControl(this.registerFormGroup);
  public repeatPasswordControl = this.registerFormBuilderService.getRepeatPasswordControl(this.registerFormGroup);

  public readonly nameErrorsMap = this.registerFormBuilderService.nameErrorsMap;
  public readonly passwordErrorsMap = this.registerFormBuilderService.passwordErrorsMap;
  public readonly repeatPasswordErrorsMap = this.registerFormBuilderService.repeatPasswordErrorsMap;
  public readonly repeatPasswordMatcher = this.registerFormBuilderService.getRepeatPasswordMatcher();

  constructor(
    private registerFormBuilderService: RegisterFormBuilderService,
    private authRestService: AuthRestService,
    private router: Router
  ) {
  }

  public onSubmit(registerFormGroup: FormGroup<RegisterFormGroup>): void {
    if (registerFormGroup.valid) {
      const {repeatPassword, ...formValue} = registerFormGroup.getRawValue();

      this.authRestService.register(formValue).subscribe((result) => {
        if (!result.failed) {
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
