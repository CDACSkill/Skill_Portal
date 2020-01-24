import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCertificationComponent } from './available-certification.component';

describe('AvailableCertificationComponent', () => {
  let component: AvailableCertificationComponent;
  let fixture: ComponentFixture<AvailableCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
