import { TestBed } from '@angular/core/testing';

import { AuthorizedSideNavService } from './authorized-side-nav.service';

describe('AuthorizedSideNavService', () => {
  let service: AuthorizedSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
