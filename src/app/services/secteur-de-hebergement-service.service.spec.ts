import { TestBed } from '@angular/core/testing';

import { SecteurDeHebergementServiceService } from './secteur-de-hebergement-service.service';

describe('SecteurDeHebergementServiceService', () => {
  let service: SecteurDeHebergementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecteurDeHebergementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
