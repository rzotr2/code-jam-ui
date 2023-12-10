import { Component, inject} from '@angular/core';
import {LoginFormService} from "./services/login-form.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthRestService} from "../../../../services/auth-rest/auth-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [LoginFormService]
})
export class LoginFormComponent {
  private loginFormService: LoginFormService = inject(LoginFormService);

  public loginForm: FormGroup = this.loginFormService.createLoginForm();
  public nameControl: FormControl = this.loginFormService.getNameControl(this.loginForm);
  public passwordControl: FormControl = this.loginFormService.getPassword(this.loginForm);

  constructor(
    private authRestService: AuthRestService,
    private router: Router
  ) {}

  public login(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      alert('Form group is invlaid')
        console.log(formGroup)
    }

    const formData = formGroup.getRawValue();
    this.authRestService.login(formData)
      .subscribe(
      {
        error: () => {alert('Your login/password are incorrect')},
        next: (response) => {
          this.router.navigateByUrl('/');
          localStorage.setItem('token', response.token)
        }
      }
    )
  }
}
