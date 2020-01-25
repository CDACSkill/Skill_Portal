import { Injectable } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { Observable } from 'rxjs';
import { EmployeeSkill } from './employee-skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
  
  updateSkillRating: number;
  
  constructor(private httpclient:HttpClient) { }
  
  // getObject(employeeUpdate: EmployeeSkill) {
  //   this.objectrate =new EmployeeSkill();  
  //   objectrate.skill_name=employeeUpdate.skill_name;
  //   objectrate.skill_group=employeeUpdate.skill_group;
  //   objectrate.rating=employeeUpdate.rating
   
  // }

  getSkill():Observable<EmployeeSkill[]>
  {
    let url="http://localhost:8800/api/get_skills";
    return this.httpclient.get<EmployeeSkill[]>(url);
  }
  addSkill(employee:EmployeeSkill):Observable<EmployeeSkill>
  {
    let url = "http://localhost:8800/api/insert_skill";
    return this.httpclient.post<EmployeeSkill>(url,employee);
  }
  // submitRatingServe(rated:number):Observable<EmployeeSkill>
  // {
  //  this.updateSkillRating=rated;
  //  let url = "http://localhost:8800/api/update_rating";
  //  return this.httpclient.post<EmployeeSkill>(url,);
  // }
  
}

