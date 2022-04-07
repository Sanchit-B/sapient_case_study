import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoadingMatTableComponent } from './dynamic-loading-mat-table.component';

describe('DynamicLoadingMatTableComponent', () => {
  let component: DynamicLoadingMatTableComponent;
  let fixture: ComponentFixture<DynamicLoadingMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLoadingMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLoadingMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
