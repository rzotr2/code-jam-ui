import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {defer, from, Observable} from 'rxjs';

@Injectable()
export class RoutingCommonService {
  private router: Router = inject(Router);

  public getNavigationStream(url: string | [], isDefer: boolean = true): Observable<boolean> {
    return isDefer ? defer(() => this.getNavigationPromise(url)) : from(this.getNavigationPromise(url));
  }

  private getNavigationPromise(url: string | []): Promise<boolean> {
    return Array.isArray(url) ? this.router.navigate(url) : this.router.navigateByUrl(url);
  }
}
