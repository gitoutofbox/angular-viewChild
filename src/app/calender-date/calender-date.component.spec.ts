import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDateComponent } from './calender-date.component';

describe('CalenderDateComponent', () => {
  let component: CalenderDateComponent;
  let fixture: ComponentFixture<CalenderDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
