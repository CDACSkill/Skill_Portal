import { Component, OnInit } from '@angular/core';
import { EmployeeTraining } from '../employee-training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-available-training',
  templateUrl: './available-training.component.html',
  styleUrls: ['./available-training.component.css']
})
export class AvailableTrainingComponent implements OnInit {
  availtraining: Array<EmployeeTraining>;
  employeeTraining: EmployeeTraining;
  training_name:string;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.getAvailTraining().subscribe(data=>
      this.availtraining=data
      );
  }

  enrollTraining(index:number)
  {
       this.training_name = this.availtraining[index].training_name;
         this.trainingService.enrollTraining(this.training_name).subscribe((data:any)=>
          {
            if(data==1)
            {
              alert("added successfully");
            }
            else{
              alert("already exist");
            }
          });
        
      
    
  }
}
