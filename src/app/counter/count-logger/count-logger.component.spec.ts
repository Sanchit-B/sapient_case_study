import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLoggerComponent } from './count-logger.component';

describe('CountLoggerComponent', () => {
  let component: CountLoggerComponent;
  let fixture: ComponentFixture<CountLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
