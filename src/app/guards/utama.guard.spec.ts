import { TestBed } from '@angular/core/testing';

import { UtamaGuard } from './utama.guard';

describe('UtamaGuard', () => {
  let guard: UtamaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UtamaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
