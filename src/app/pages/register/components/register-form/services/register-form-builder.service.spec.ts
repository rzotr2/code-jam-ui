import { TestBed } from '@angular/core/testing';

import { RegisterFormBuilderService } from './register-form-builder.service';

describe('RegisterFormBuilderService', () => {
  let service: RegisterFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
