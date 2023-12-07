import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';

import {of, switchMap} from 'rxjs';

import {RoutingCommonService} from '@common';
import {UserDataService} from '@user-dl';

export const authGuard: CanActivateFn = () => {
  const routingCommonService: RoutingCommonService = inject(RoutingCommonService);
  const userDataService: UserDataService = inject(UserDataService);

  const logoutUser$ = routingCommonService.getNavigationStream('/login');

  return userDataService.isAuthorized$.pipe(
    switchMap(isAuthorized => {
      if (isAuthorized) {
        return of(true);
      }

      if (localStorage.getItem('token')) {
        return userDataService.loadCurrent().pipe(
          switchMap((result) => result.succeeded ? of(true) : logoutUser$),
        );
      }

      return logoutUser$;
    }),
  );
};
