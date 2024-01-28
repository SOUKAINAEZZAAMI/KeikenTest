import { TestBed } from '@angular/core/testing';

import { PropGPTService } from './prop-gpt.service';

describe('PropGPTService', () => {
  let service: PropGPTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropGPTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
