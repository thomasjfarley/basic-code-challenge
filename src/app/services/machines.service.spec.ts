import {TestBed} from '@angular/core/testing';

import {MachinesService} from './machines.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MachinesService', () => {
  let service: MachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
