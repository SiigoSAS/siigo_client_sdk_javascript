import { TestBed } from '@angular/core/testing';

import { DocumentTypesService } from './document-types.service';

describe('DocumentTypesService', () => {
  let service: DocumentTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
