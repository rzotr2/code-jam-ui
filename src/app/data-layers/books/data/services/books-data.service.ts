import {Injectable} from '@angular/core';

import {BehaviorSubject, map, Observable, tap} from 'rxjs';

import {BooksRestService} from '../../rest/services/books-rest.service';
import {Book, BookQueryParams} from '../../models';

export interface BooksState {
  entities: Record<string, Book>;
  list: Book[];
  ids: string[];
  count: number;
}

@Injectable()
export class BooksDataService {
  private booksSubject = new BehaviorSubject<Book[]>([]);

  public books$: Observable<BooksState> = this.booksSubject.asObservable().pipe(
    map(books => ({
      list: books,
      ids: books.map(book => book.id),
      count: books.length,
      entities: books.reduce((entities, book) => {
        entities[book.id] = book;

        return entities;
      }, {})
    })),
  );

  constructor(
    private booksRestService: BooksRestService,
  ) {
  }

  public loadAll(queryParams: BookQueryParams = {}) {
    return this.booksRestService.getAll(queryParams).pipe(
      tap(result => {
        if (!result.failed) {
          this.booksSubject.next(result.response);
        }
      }),
    );
  }

  public loadOne(name: string) {
    const books = this.booksSubject.getValue();
    const isAlreadyExist = books.some(book => book.id === name);

    return this.booksRestService.getOne(name).pipe(
      tap(result => {
        if (!result.failed) {
          if (isAlreadyExist) {
            this.booksSubject.next(books.map(book => book.id === name ? result.response : book));
          } else {
            this.booksSubject.next([...books, result.response]);
          }
        }
      }),
    );
  }
}
