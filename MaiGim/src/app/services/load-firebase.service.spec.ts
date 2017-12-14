import { TestBed, inject } from '@angular/core/testing';

import { LoadFirebaseService } from './load-firebase.service';

describe('LoadFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadFirebaseService]
    });
  });

  it('should be created', inject([LoadFirebaseService], (service: LoadFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
