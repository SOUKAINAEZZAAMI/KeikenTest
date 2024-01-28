import { TestBed } from '@angular/core/testing';

import { InformationWeatherService } from './information-weather.service';

describe('InformationWeatherService', () => {
  let service: InformationWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
