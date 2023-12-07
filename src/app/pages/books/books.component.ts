import {ChangeDetectionStrategy, Component} from '@angular/core';

import {BooksDataService} from '@books-dl';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  public booksState$ = this.booksDataService.books$;

  constructor(
    private booksDataService: BooksDataService,
  ) {
  }
}
