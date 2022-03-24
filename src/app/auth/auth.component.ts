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

  selectedOption;
  username;
  password;
  login = ["Student" , "Mess" , "Security" , "Warden" , ];
  ngOnInit(): void {
  }

  Submit(f){
    this.authService.onLogin(this.username,this.password,this.selectedOption);
  }

}
