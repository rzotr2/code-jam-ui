import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {of, Subscription, switchMap} from 'rxjs';

import {RoutingCommonService} from '@common';
import {AuthRestService} from '@auth-dl';

import {RegisterFormBuilderService, RegisterFormGroup} from './services/register-form-builder.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [RegisterFormBuilderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnDestroy {
  private subscriptions = new Subscription();

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
    private routingCommonService: RoutingCommonService,
  ) {
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit(registerFormGroup: FormGroup<RegisterFormGroup>): void {
    if (registerFormGroup.valid) {
      const {repeatPassword, ...formValue} = registerFormGroup.getRawValue();

      this.subscriptions.add(
        this.authRestService.register(formValue).pipe(
          switchMap((result) => result.succeeded ?
            this.routingCommonService.getNavigationStream('/login') :
            of(result)
          ),
        ).subscribe(),
      );
    }
  }
}
