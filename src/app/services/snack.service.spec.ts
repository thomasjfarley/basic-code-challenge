import { TestBed } from '@angular/core/testing';

import { SnackService } from './snack.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SnackService', () => {
  let service: SnackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SnackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
