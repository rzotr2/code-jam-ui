import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, tap} from 'rxjs';

import {environment} from '../../../environments/environment';

export interface Book {
  name: string;
  url: string;
  cover?: string;
  description?: string;
  id?: string;
}

@Injectable()
export class DataService {
  public state$ = signal<Book[]>([]);

  constructor(
    private http: HttpClient,
  ) {
  }

  public loadAll(name?: string, limit?: number): Observable<Book[]> {
    const queryParams: {
      name?: string,
      limit?: number
    } = {};

    if (name) {
      queryParams.name = name;
    }

    if (limit) {
      queryParams.limit = limit;
    }

    return this.http.get<Book[]>(`${environment.apiUrl}/books`, {params: queryParams}).pipe(
      tap(books => this.state$.set(books)),
    );
  }

  public create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.apiUrl}/books`, book).pipe(
      tap(book => this.state$.update(books => [...books, book])),
    );
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/books/${id}`).pipe(
      tap(() => this.state$.update(books => books.filter(book => book.id !== id))),
    );
  }
}
