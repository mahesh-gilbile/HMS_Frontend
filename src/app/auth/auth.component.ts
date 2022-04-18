import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  username;
  password;
  Login = ["Student" , "Mess" , "Security" , "Warden" , "Admin" , "Secretory"]
  loginUser = this.Login[0];
  ngOnInit(): void {
    
  }

  Submit(f){
    this.authService.onLogin(this.username,this.password,this.loginUser);
  }

  onLeft(){
    const index = this.Login.indexOf(this.loginUser);
    if(index === 0){
      this.loginUser = this.Login[this.Login.length - 1];
    }else if(index === this.Login.length - 1){
      this.loginUser = this.Login[index - 1];
    }else{
      this.loginUser = this.Login[index-1];
    }
  }

  onRight(){
    const index = this.Login.indexOf(this.loginUser);
    if(index === this.Login.length - 1){
      this.loginUser = this.Login[0];
    }else{
      this.loginUser = this.Login[index+1];
    }
  }

}
