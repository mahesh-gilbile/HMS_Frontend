import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsQR from "jsqr"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
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
