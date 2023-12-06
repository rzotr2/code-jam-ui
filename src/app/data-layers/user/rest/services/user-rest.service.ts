import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

import {showMessage, transformResponse} from '@dl-common';
import {environment} from '@env';

import {User} from '../../models';

@Injectable()
export class UserRestService {
    private readonly baseUrl = `${environment.apiUrl}/user/me`;

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar,
    ) {
    }

    public getCurrent() {
        return this.http.get<User>(this.baseUrl).pipe(
            transformResponse<User>(),
            showMessage<User>(this.snackBar, {
                failure: 'Failed to load user data.'
            })
        );
    }
}
