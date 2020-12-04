import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ExamService } from './exam.service';

describe('ExamService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ExamService],
    imports : [HttpClientModule]

  }));

  it('should be created', () => {
    const service: ExamService = TestBed.get(ExamService);
    expect(service).toBeTruthy();
  });
});
