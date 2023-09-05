import { TestBed } from '@angular/core/testing';

import { RepoTasksService } from './repo.tasks.service';
import { HttpClientModule } from '@angular/common/http';

describe('RepoTasksService', () => {
  let service: RepoTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RepoTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
