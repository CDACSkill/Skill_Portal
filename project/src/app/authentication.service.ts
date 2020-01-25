import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  constructor(private httpclient:HttpClient) { }

  authenticate(log:Login):Observable<Login> {
    
     let url="http://localhost:8800/api/Login";
     return this.httpclient.post<Login>(url,log);
    }
    register(newEmployee: Login):Observable<any> {
      let url= "http://localhost:8800/api/LoginAuth";
      return this.httpclient.post(url,newEmployee);
      
    }
  }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('username')
  //   console.log(!(user === null))
  //   return !(user === null)
  // }

  // logOut() {
  //   sessionStorage.removeItem('username')
  // }
