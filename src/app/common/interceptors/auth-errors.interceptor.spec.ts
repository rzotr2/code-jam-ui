import { TestBed } from '@angular/core/testing';

import { AuthErrorsInterceptor } from './auth-errors.interceptor';

describe('AuthErrorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthErrorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthErrorsInterceptor = TestBed.inject(AuthErrorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
