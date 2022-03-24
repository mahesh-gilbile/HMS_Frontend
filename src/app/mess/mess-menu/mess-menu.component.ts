import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mess-menu',
  templateUrl: './mess-menu.component.html',
  styleUrls: ['./mess-menu.component.css']
})
export class MessMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onWeeklyMenuReDirect(type){
    this.router.navigate(['../../mess/menu',type]);
  }

}
