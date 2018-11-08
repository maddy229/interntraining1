import { TestBed, inject } from '@angular/core/testing';

import { Scroll2TopService } from './scroll2-top.service';

describe('Scroll2TopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Scroll2TopService]
    });
  });

  it('should be created', inject([Scroll2TopService], (service: Scroll2TopService) => {
    expect(service).toBeTruthy();
  }));
});
