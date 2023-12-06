import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';

import {UserDataService} from '@user-dl';

export const logoutResolver: ResolveFn<boolean> = () => {
    const userDataService = inject(UserDataService);

    userDataService.clearUserData();
    localStorage.removeItem('token');

    return true;
};
