import { TestBed } from '@angular/core/testing';

import { PaymentTypesService } from './payment-types.service';

describe('PaymentTypesService', () => {
  let service: PaymentTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
