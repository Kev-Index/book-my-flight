import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFlightComponent } from './generate-flight.component';

describe('GenerateFlightComponent', () => {
  let component: GenerateFlightComponent;
  let fixture: ComponentFixture<GenerateFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
