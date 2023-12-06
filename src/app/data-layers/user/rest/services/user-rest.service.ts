import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {transformResponse} from '@dl-common';
import {environment} from '@env';

import {User} from '../../models';

@Injectable()
export class UserRestService {
    private readonly baseUrl = `${environment.apiUrl}/user/me`;

    constructor(
        private http: HttpClient,
    ) {
    }

    public getCurrent() {
        return this.http.get<User>(this.baseUrl).pipe(
            transformResponse<User>()
        );
    }
}
