import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTrainingComponent } from './available-training.component';

describe('AvailableTrainingComponent', () => {
  let component: AvailableTrainingComponent;
  let fixture: ComponentFixture<AvailableTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
