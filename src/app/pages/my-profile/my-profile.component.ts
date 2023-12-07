import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {Subscription} from 'rxjs';

import {User, UserDataService} from '@user-dl';
import {BooksDataService} from '@books-dl';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfileComponent implements OnDestroy {
  private subscriptions = new Subscription();

  public user$ = this.userDataService.currentUser$;
  public booksState$ = this.booksDataService.books$;

  public bio = '';

  constructor(
    private userDataService: UserDataService,
    private booksDataService: BooksDataService,
  ) {
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public saveBio(user: User, bio: string): void {
    this.subscriptions.add(
      this.userDataService.updateCurrent({...user, about: bio}).subscribe(),
    );
  }
}
