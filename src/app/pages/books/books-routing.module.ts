import {inject, NgModule} from '@angular/core';
import {ResolveFn, RouterModule, Routes} from '@angular/router';

import {BooksDataService} from '@books-dl';

import {BooksComponent} from './books.component';

const booksResolver: ResolveFn<any> = () => {
  const booksDataService: BooksDataService = inject(BooksDataService);

  return booksDataService.loadAll({limit: 10});
};

const routes: Routes = [
  {
    path: '',
    resolve: [booksResolver],
    component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
