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
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.availtraining=this.trainingService.getAvailTraining();
  }

  enrollTraining(index:number)
  {
        this.employeeTraining = new EmployeeTraining();
        this.employeeTraining.trainingName = this.availtraining[index].trainingName;
        this.employeeTraining.date = this.availtraining[index].date;
        this.trainingService.enrollTraining(this.employeeTraining);
        alert("Added successfully");
      
    
  }
}
