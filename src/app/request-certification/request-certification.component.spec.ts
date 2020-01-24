import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCertificationComponent } from './request-certification.component';

describe('RequestCertificationComponent', () => {
  let component: RequestCertificationComponent;
  let fixture: ComponentFixture<RequestCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
