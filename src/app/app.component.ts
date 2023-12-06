import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

import {BehaviorSubject, delay, of, switchMap} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private loadingSubject = new BehaviorSubject<boolean>(true);
  public loading$ = this.loadingSubject.asObservable().pipe(
      switchMap((isLoading) => {
        return isLoading ? of(isLoading) : of(isLoading).pipe(delay(500));
      }),
  );

  constructor(private router: Router) {
    this.router.events.subscribe((e : any) => {
      this.navigationInterceptor(e);
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loadingSubject.next(true);
    }
    if (event instanceof NavigationEnd) {
      this.loadingSubject.next(false);
    }

    if (event instanceof NavigationCancel) {
      this.loadingSubject.next(false);
    }
    if (event instanceof NavigationError) {
      this.loadingSubject.next(false);
    }
  }
}
