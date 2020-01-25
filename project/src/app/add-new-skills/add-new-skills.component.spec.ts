import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSkillsComponent } from './add-new-skills.component';

describe('AddNewSkillsComponent', () => {
  let component: AddNewSkillsComponent;
  let fixture: ComponentFixture<AddNewSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
