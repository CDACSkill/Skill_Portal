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
  constructor(private trainingService: TrainingService) { }
s
  ngOnInit() {
    this.trainings=this.trainingService.getTraining();
  }
  delete(index:number)
  {
    this.trainingService.delete(index);
    alert("Deleted successfully");
  }

}
