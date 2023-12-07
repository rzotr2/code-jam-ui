import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';

import {map, of, switchMap} from 'rxjs';

import {UserDataService} from '@user-dl';

export const userDataResolver: ResolveFn<boolean> = () => {
    const userDataService = inject(UserDataService);

    return userDataService.isAuthorized$.pipe(
        switchMap((isAuthorized) => {
            if (isAuthorized && localStorage.getItem('token')) {
                return of(true);
            }

            if (localStorage.getItem('token')) {
                return userDataService.loadCurrent().pipe(map(user => !!user));
            }

            return of(true);
        }),
    );
};
