import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';

import {UserDataService} from '@user-dl';
import {of} from 'rxjs';

export const userDataResolver: ResolveFn<any> = () => {
    const userDataService = inject(UserDataService);

    return localStorage.getItem('token') ? userDataService.loadCurrent() : of(true);
};
