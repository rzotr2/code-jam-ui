import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Router} from '@angular/router';

import {catchError, Observable} from 'rxjs';

@Injectable()
export class AuthErrorsInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError(httpErrorResponse => {
                if (httpErrorResponse && httpErrorResponse.status === 401) {
                    this.router.navigate(['/login']);

                    throw httpErrorResponse;
                } else {
                    throw httpErrorResponse;
                }
            }),
        );
    }
}
