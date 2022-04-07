import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcaiMultiSelectComponent } from './hcai-multi-select.component';

describe('HcaiMultiSelectComponent', () => {
  let component: HcaiMultiSelectComponent;
  let fixture: ComponentFixture<HcaiMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcaiMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcaiMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
