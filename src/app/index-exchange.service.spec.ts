import { TestBed } from '@angular/core/testing';

import { IndexExchangeService } from './index-exchange.service';

describe('IndexExchangeService', () => {
  let service: IndexExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
