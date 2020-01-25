import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  myform;
 log =new Login();
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.myform = new FormGroup({
          name: new FormGroup({
            username : new FormControl('',Validators.required),
            password : new FormControl('',Validators.required)
          })
       });
  }

  checkLogin() {
    this.log.userid=this.username;
    this.log.password=this.password;
    this.loginservice.authenticate(this.log).subscribe((data:Login)=>
    {
     
    if(!(data.userid==this.username)) 
    {
      alert("Enter Valid UserName & Password");
       
      }
       else
        // this.invalidLogin = true
        this.router.navigate(['dashboard']);
        this.invalidLogin = false;
      
    });
  
}
  register() { 
    this.router.navigate(['/Register'])
       
  } 

}