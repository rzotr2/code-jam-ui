import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';

import {UserDataService} from '@user-dl';
import {of, switchMap} from 'rxjs';

export const userDataResolver: ResolveFn<any> = () => {
    const userDataService = inject(UserDataService);

    return userDataService.isAuthorized$.pipe(
        switchMap((isAuthorized) => {
            if (isAuthorized && localStorage.getItem('token')) {
                return of(true);
            }

            if (localStorage.getItem('token')) {
                return userDataService.loadCurrent();
            }

            return of(true);
        }),
    );
};
