import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

import {from, of, switchMap} from 'rxjs';

import {UserDataService} from '@user-dl';

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    const userDataService = inject(UserDataService);

    return userDataService.isAuthorized$.pipe(
        switchMap(isAuthorized => {
            if (isAuthorized) {
                return of(true);
            } else if (!!localStorage.getItem('token')) {
                return userDataService.loadCurrent().pipe(
                    switchMap((result) => {
                        if (result.failed) {
                            return from(router.navigate(['/login']).then(() => false));
                        } else {
                            return of(true);
                        }
                    }),
                );
            } else {
                return from(router.navigate(['/login']).then(() => false));
            }
        }),
    );
};
