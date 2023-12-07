import {inject, NgModule} from '@angular/core';
import {ResolveFn, RouterModule, Routes} from '@angular/router';

import {switchMap} from 'rxjs';

import {UserDataService} from '@user-dl';
import {BooksDataService} from '@books-dl';

import {MyProfileComponent} from './my-profile.component';

const myProfileResolver: ResolveFn<any> = () => {
  const booksDataService: BooksDataService = inject(BooksDataService);
  const userDataService: UserDataService = inject(UserDataService);

  return userDataService.currentUser$.pipe(
    switchMap((user) => booksDataService.loadAll({creator: user.name})),
  );
};

const routes: Routes = [
    {path: '', resolve: [myProfileResolver], component: MyProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyProfileRoutingModule {
}
