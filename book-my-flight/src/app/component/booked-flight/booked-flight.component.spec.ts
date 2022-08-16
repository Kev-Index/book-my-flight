import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedFlightComponent } from './booked-flight.component';

describe('BookedFlightComponent', () => {
  let component: BookedFlightComponent;
  let fixture: ComponentFixture<BookedFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
