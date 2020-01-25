
import { Injectable } from '@angular/core';
import { EmployeeTraining } from './employee-training';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
 
  rest:Boolean;

 
  constructor(private httpclient:HttpClient) { }

  getTraining():Observable<EmployeeTraining[]>
  {
    let url = "http://localhost:8800/api/getEnTraining";
    return this.httpclient.get<EmployeeTraining[]>(url);
  }
  getAvailTraining():Observable<EmployeeTraining[]>
  {
    let url="http://localhost:8800/api/get_availtraining";
    return this.httpclient.get<EmployeeTraining[]>(url);
  }
  
  enrollTraining(training_name:string):Observable<any>
  {
    let url = "http://localhost:8800/api/addInMyTrain?training_name="+training_name;
    return this.httpclient.get(url);
        
  }
 
       deleteTraining(training:EmployeeTraining):Observable<any> 
       {
       let url = "http://localhost:8800/api/delInMyTrain";
       return this.httpclient.post(url,training);
      }
    
  }

