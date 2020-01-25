import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';
import { EmployeeSkill } from '../employee-skill';
@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  rating:number;
status:string;
  constructor(private skillservice:SkillServiceService) { }
  
  ngOnInit() {
    
       
    
  }
  submitRating()
  { 
    // console.log(this.rating);
    // this.skillservice.submitRatingServe(this.rating).subscribe((data:EmployeeSkill)=>
    // {
    //   console.log(data.skill_name+" "+data.skill_group+ " "+ data.rating);
    // });
  }

}
