import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@env';
import {transformResponse} from '@dl-common';

import {Book, BookQueryParams} from '../../models';

@Injectable()
export class BooksRestService {
  private readonly baseUrl = `${environment.apiUrl}/books`;
  private baseUrlId = (id: string) => `${environment.apiUrl}/books/${id}`;

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(queryParams: BookQueryParams) {
    const params = Object.keys(queryParams).reduce((params, key) => {
      params[key] = queryParams[key];
      return params;
    }, {});

    return this.http.get<Book[]>(this.baseUrl, {params}).pipe(
      transformResponse<Book[]>(),
    );
  }

  public getOne(name: string) {
    return this.http.get<Book>(this.baseUrlId(name)).pipe(
      transformResponse<Book>(),
    );
  }
}
