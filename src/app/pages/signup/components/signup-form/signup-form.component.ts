import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignupFormService} from "./services/signup-form.service";
import {APP_CONSTANTS, AppConstants} from "../../../../app-common/constants";
import {AuthRestService} from "../../../../services/auth-rest/auth-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  providers: [
    SignupFormService,
    AuthRestService,

  ]
})
export class SignupFormComponent {
  private signUpFormService: SignupFormService = inject(SignupFormService);
  private appConstants: AppConstants = inject(APP_CONSTANTS);

  public signUpForm: FormGroup = this.signUpFormService.createSignUpForm();
  public nameControl: FormControl = this.signUpFormService.getNameControl(this.signUpForm);
  public passwordControl: FormControl = this.signUpFormService.getPassword(this.signUpForm);
  public repeatPasswordControl: FormControl = this.signUpFormService.getRepeatPassword(this.signUpForm);

  public errorMessagesMap = {...this.appConstants.errorMessagesMap, passwordsMismatch: `Passwords don't match`};

  constructor(
    private authRestService: AuthRestService,
    private router: Router,
  ) {}

  public signUp(formGroup: FormGroup) {
    if (formGroup.invalid) {
      alert('Something is wrong! Please make sure you enter correct information');
      return;
    }

    const {repeatPassword, ...registerPayload} = formGroup.getRawValue();

    this.authRestService.register(registerPayload)
      .subscribe(
        {
          error: console.log,
          next: () => {this.router.navigateByUrl('/login')}
        }
      )
  }
}
