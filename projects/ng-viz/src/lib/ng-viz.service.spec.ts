import { TestBed } from '@angular/core/testing';

import { NgVizService } from './ng-viz.service';

describe('NgVizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgVizService = TestBed.get(NgVizService);
    expect(service).toBeTruthy();
  });
});
