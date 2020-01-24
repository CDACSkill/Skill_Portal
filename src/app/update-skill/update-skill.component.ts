import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';
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
  submitRating(rate:number)
  {if(rate<=5)
    {
      this.skillservice.submitRatingServe(rate);
      this.status = "update successfully";

    }
    else{
      alert("rating can not be more than 5");
    }
    
  }

}
