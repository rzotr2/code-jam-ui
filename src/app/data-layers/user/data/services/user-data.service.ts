import {Injectable} from '@angular/core';

import {BehaviorSubject, map, Observable, tap} from 'rxjs';

import {HttpResponse} from '@dl-common';

import {UserRestService} from '../../rest/services/user-rest.service';
import {User} from '../../models';

@Injectable()
export class UserDataService {
  private userSubject = new BehaviorSubject<User>(null);

  public currentUser$ = this.userSubject.asObservable();
  public isAuthorized$ = this.currentUser$.pipe(map(user => !!user));

  constructor(
    private userRestService: UserRestService,
  ) {
  }

  public loadCurrent(): Observable<HttpResponse<User>> {
    return this.userRestService.getCurrent().pipe(
      tap((result) => {
        if (result.succeeded) {
          this.userSubject.next(result.response);
        }
      }),
    );
  }

  public updateCurrent(user: User): Observable<HttpResponse<User>> {
    return this.userRestService.updateCurrent(user).pipe(
      tap((result) => {
        if (result.succeeded) {
          this.userSubject.next(result.response);
        }
      }),
    );
  }

  public clearUserData(): void {
    this.userSubject.next(null);
  }
}
