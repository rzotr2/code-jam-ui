import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {environment} from '@env';
import {showMessage, transformResponse} from '@dl-common';

import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse} from '../../models';

@Injectable()
export class AuthRestService {
    private readonly baseUrl = `${environment.apiUrl}/auth`;

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar,
    ) {
    }

    public login(loginPayload: LoginPayload) {
        return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginPayload).pipe(
            transformResponse<LoginResponse>(),
            showMessage<LoginResponse>(this.snackBar, {
                success: 'Login succeeded. Redirecting to Home page.',
                failure: 'Failed to login. Please, check your credentials.'
            })
        );
    }

    public register(registerPayload: RegisterPayload) {
        return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, registerPayload).pipe(
            transformResponse<RegisterResponse>(),
            showMessage<RegisterResponse>(this.snackBar, {
                success: 'Registration succeeded. Redirecting to Login page.',
                failure: 'Failed to register. Please, check your credentials.'
            })
        );
    }
}
