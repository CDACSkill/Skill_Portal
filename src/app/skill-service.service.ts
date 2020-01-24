import { Injectable } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { Observable } from 'rxjs';
import { EmployeeSkill } from './employee-skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
  updateSkillRating: number;
  skill:Array<EmployeeSkill> = [{
    skillname:'css',
    skillgroup :'skillgroup',
    rating : 3
  },
  {
    skillname:'css',
    skillgroup :'skillgroup',
    rating : 3
  }]
  
  constructor() { }


  get()
  {
    return this.skill;
  }
  addSkill(employee:EmployeeSkill)
  {
    this.skill.push(employee);
    this.get();
  }
  submitRatingServe(rated:any)
  {
    this.skill[this.updateSkillRating].rating=rated;
    this.get();
  }
  getIndex(index: number) {
    
    this.updateSkillRating=index;
      }
}

