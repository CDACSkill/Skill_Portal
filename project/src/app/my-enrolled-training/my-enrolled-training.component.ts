import { Component, OnInit } from '@angular/core';
import { EmployeeTraining } from '../employee-training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-my-enrolled-training',
  templateUrl: './my-enrolled-training.component.html',
  styleUrls: ['./my-enrolled-training.component.css']
})
export class MyEnrolledTrainingComponent implements OnInit {
  trainings: Array<EmployeeTraining>;
  training:EmployeeTraining;
   
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
   this.trainingService.getTraining().subscribe(data=>{
      this.trainings=data
    });
  }
  delete(index:number)
  {
    this.training = new EmployeeTraining();
    this.training.training_name=this.trainings[index].training_name;
    this.training.date=this.trainings[index].date;
    this.trainingService.deleteTraining(this.training).subscribe((data:any)=>
    {
      if(data==1){
        alert("Deleted successfully");
        this.ngOnInit();
      }else{
        alert("failed");
      }
      
    });
    
  }

}
