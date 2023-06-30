import { TestBed } from '@angular/core/testing';

import { ToggleFooterService } from './toggle-footer.service';

describe('toggleFooterService', () => {
  let service: ToggleFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
