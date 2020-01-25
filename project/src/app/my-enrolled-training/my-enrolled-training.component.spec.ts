import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEnrolledTrainingComponent } from './my-enrolled-training.component';

describe('MyEnrolledTrainingComponent', () => {
  let component: MyEnrolledTrainingComponent;
  let fixture: ComponentFixture<MyEnrolledTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEnrolledTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEnrolledTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
