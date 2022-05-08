import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HostelMS';

  constructor(
    private authService: AuthService
  ){ }

  ngOnInit(): void {
    // this.authService.autoLogin();
  }

  route = 0;

  timepass = null;

  changeroute(n){
    this.route = n;
  }

  changePage(m){
    this.timepass = m;
  }
}
