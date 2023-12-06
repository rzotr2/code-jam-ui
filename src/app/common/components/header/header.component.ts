import {ChangeDetectionStrategy, Component} from '@angular/core';

import {UserDataService} from '@user-dl';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isAuthorized$ = this.userDataService.isAuthorized$;

  constructor(
      private userDataService: UserDataService,
  ) {
  }
}
