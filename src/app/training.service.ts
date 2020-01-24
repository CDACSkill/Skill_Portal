
import { Injectable } from '@angular/core';
import { EmployeeTraining } from './employee-training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
 
  rest:Boolean;

  mytraining:Array<EmployeeTraining> = [{
    trainingName: 'Java',
    date: '12-1-2020'
  },
  {
    trainingName: 'AdvanceJava',
    date: '12-2-2020'
  }]


  availtraining:Array<EmployeeTraining> = [{
    trainingName: 'Java',
    date: '12-1-2020'
  },
  {
    trainingName: 'DBMS',
    date: '12-2-2020'
  }]
 
  constructor() { }

  getTraining()
  {
    return this.mytraining;
  }
  getAvailTraining()
  {
    return this.availtraining;
  }
  
  enrollTraining(training: EmployeeTraining)
  {
    
        this.mytraining.push(training);
       }
 
       delete(index: number) {
       this.mytraining.splice(index,1);
      }
    
  }

