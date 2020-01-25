import { Component, OnInit } from '@angular/core';
import { EmployeeSkill } from '../employee-skill';
import { Login } from '../login';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
newuser:string;
newpassword:string;
newEmployee:Login
  constructor(private newRegisterService:AuthenticationService,private route:Router) { }

  ngOnInit() {
  }
  register()
  {
    this.newEmployee= new Login();
     this.newEmployee.userid=this.newuser;
     this.newEmployee.password=this.newpassword;
     this.newRegisterService.register(this.newEmployee).subscribe((data:any)=>
     {
       if(data==1){
         this.route.navigate(['/']);
         alert("registration successfull");
       }
else
{
  alert("registration failed");
}
       
     });
  }

}
