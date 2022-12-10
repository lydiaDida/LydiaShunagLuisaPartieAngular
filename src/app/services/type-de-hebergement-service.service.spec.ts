import { TestBed } from '@angular/core/testing';

import { TypeDeHebergementServiceService } from './type-de-hebergement-service.service';

describe('TypeDeHebergementServiceService', () => {
  let service: TypeDeHebergementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDeHebergementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
