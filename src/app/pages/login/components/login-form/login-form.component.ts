import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {of, Subscription, switchMap} from 'rxjs';

import {RoutingCommonService} from '@common';
import {AuthRestService} from '@auth-dl';

import {LoginFormBuilderService, LoginFormGroup} from './services/login-form-builder.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormBuilderService]
})
export class LoginFormComponent implements OnDestroy {
  private subscriptions = new Subscription();

  public hideMainPass = true;

  public loginFormGroup = this.loginFormBuilderService.init();
  public nameControl = this.loginFormBuilderService.getNameControl(this.loginFormGroup);
  public passwordControl = this.loginFormBuilderService.getPasswordControl(this.loginFormGroup);

  public readonly nameErrorsMap = this.loginFormBuilderService.nameErrorsMap;
  public readonly passwordErrorsMap = this.loginFormBuilderService.passwordErrorsMap;

  constructor(
    private loginFormBuilderService: LoginFormBuilderService,
    private routingCommonService: RoutingCommonService,
    private authRestService: AuthRestService,
  ) {
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit(loginFormGroup: FormGroup<LoginFormGroup>): void {
    if (loginFormGroup.valid) {
      const formValue = loginFormGroup.getRawValue();

      this.subscriptions.add(
        this.authRestService.login(formValue).pipe(
          switchMap((result) => {
            if (result.succeeded) {
              localStorage.setItem('token', result.response.token);
            }

            return result.succeeded ? this.routingCommonService.getNavigationStream('/home') : of(result);
          }),
        ).subscribe(),
      );
    }
  }
}
