import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['dashboard']);
      this.invalidLogin = false;
    }
     else
      this.invalidLogin = true
  }
  register() { 
    this.router.navigate(['/Register'])
       
  } 

}