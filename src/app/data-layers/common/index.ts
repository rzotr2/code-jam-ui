import {HttpErrorResponse} from '@angular/common/http';

import {MatSnackBar} from '@angular/material/snack-bar';

import {catchError, map, Observable, of, OperatorFunction, tap} from 'rxjs';

export interface HttpResponse<T> {
  failed: boolean;
  succeeded: boolean;
  response?: T,
  error?: any;
}

export interface RequestMessagesMap {
  success?: string,
  failure?: string,
}

export const defaultRequestMessagesMap: RequestMessagesMap = {
  success: 'Request succeeded',
  failure: 'Request failed',
}

export const transformResponse = <T>(): OperatorFunction<T, HttpResponse<T>> => {
  return (source: Observable<T>): Observable<HttpResponse<T>> => {
    return source.pipe(
        map((response: T) => ({failed: false, succeeded: true, response})),
        catchError((httpErrorResponse: HttpErrorResponse) => of(({
          failed: true,
          succeeded: false,
          error: httpErrorResponse.error,
        }))),
    );
  };
};

export const showMessage = <T>(
    snackBar: MatSnackBar,
    requestMessagesMap: RequestMessagesMap = defaultRequestMessagesMap,
    duration: number = 3000
): OperatorFunction<HttpResponse<T>, HttpResponse<T>> => {
  return (source: Observable<HttpResponse<T>>): Observable<HttpResponse<T>> => {
    return source.pipe(
        tap(response => {
          if (response.failed && requestMessagesMap.failure) {
            snackBar.open(requestMessagesMap.failure, undefined, {duration});
          }

          if (response.succeeded && requestMessagesMap.success) {
            snackBar.open(requestMessagesMap.success, undefined, {duration});
          }
        }),
    );
  }
};

