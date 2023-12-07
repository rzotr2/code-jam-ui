import { TestBed } from '@angular/core/testing';

import { RoutingCommonService } from './routing-common.service';

describe('RoutingCommonService', () => {
  let service: RoutingCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
