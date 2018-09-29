import { TestBed, inject } from '@angular/core/testing';

import { SeriesService } from './series.service';
import { HttpClientModule } from '@angular/common/http';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService, HttpClientModule],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
