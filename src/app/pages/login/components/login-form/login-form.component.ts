import {ChangeDetectionStrategy, Component} from '@angular/core';

import {LoginFormBuilderService} from './services/login-form-builder.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormBuilderService]
})
export class LoginFormComponent {
  public hideMainPass = true;

  public loginFormGroup = this.loginFormBuilderService.init();
  public nameControl = this.loginFormBuilderService.getNameControl(this.loginFormGroup);
  public passwordControl = this.loginFormBuilderService.getPasswordControl(this.loginFormGroup);

  public readonly nameErrorsMap = this.loginFormBuilderService.nameErrorsMap;
  public readonly passwordErrorsMap = this.loginFormBuilderService.passwordErrorsMap;

  constructor(
    private loginFormBuilderService: LoginFormBuilderService,
  ) {
  }
}
