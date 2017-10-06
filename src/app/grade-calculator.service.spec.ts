import { TestBed, inject } from '@angular/core/testing';

import { GradeCalculatorService } from './grade-calculator.service';

describe('GradeCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeCalculatorService]
    });
  });

  it('should be created', inject([GradeCalculatorService], (service: GradeCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
