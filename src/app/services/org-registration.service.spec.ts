import { TestBed, inject } from '@angular/core/testing';

import { OrgRegistrationService } from './org-registration.service';

describe('OrgRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgRegistrationService]
    });
  });

  it('should be created', inject([OrgRegistrationService], (service: OrgRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
