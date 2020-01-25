import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';
import { EmployeeSkill } from '../employee-skill';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-add-new-skills',
  templateUrl: './add-new-skills.component.html',
  styleUrls: ['./add-new-skills.component.css']
})
export class AddNewSkillsComponent implements OnInit {
  employeeSkill: EmployeeSkill;
  employee:Array<EmployeeSkill>
  skillname:string;
  skillgroup:string;
  rating:number;
  status:string;

  constructor(private skillService:SkillServiceService,private addedSkill:SkillsComponent) {
    
   }

  ngOnInit() {
  }
  addSkill()
  {
    this.employeeSkill=new EmployeeSkill();
    this.employeeSkill.skill_name=this.skillname;
    this.employeeSkill.skill_group=this.skillgroup;
    this.employeeSkill.rating=this.rating;
    this.skillService.addSkill(this.employeeSkill).subscribe(data=>{
     this.employee.push(data)
     this.employeeSkill=data
    });
    
    this.addedSkill.getAdded(this.employeeSkill);
    this.status = "added successfully";
    
  }
}
