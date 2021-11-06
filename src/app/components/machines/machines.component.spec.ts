import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MachinesComponent} from './machines.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MachinesComponent', () => {
  let component: MachinesComponent;
  let fixture: ComponentFixture<MachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachinesComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
