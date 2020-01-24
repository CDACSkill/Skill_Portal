import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';
import { EmployeeSkill } from '../employee-skill';

@Component({
  selector: 'app-add-new-skills',
  templateUrl: './add-new-skills.component.html',
  styleUrls: ['./add-new-skills.component.css']
})
export class AddNewSkillsComponent implements OnInit {
  employeeSkill: EmployeeSkill;
  skillname:string;
  skillgroup:string;
  rating:number;
  status:string;

  constructor(private skillService:SkillServiceService) {
    
   }

  ngOnInit() {
  }
  addSkill()
  {
    this.employeeSkill=new EmployeeSkill();
    this.employeeSkill.skillname=this.skillname;
    this.employeeSkill.skillgroup=this.skillgroup;
    this.employeeSkill.rating=this.rating;
    this.skillService.addSkill(this.employeeSkill);
    this.status = "added successfully";
  }
}
