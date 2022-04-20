import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-warden-info',
  templateUrl: './admin-warden-info.component.html',
  styleUrls: ['./admin-warden-info.component.css']
})
export class AdminWardenInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  wardenData:any[]
  ngOnInit(): void {
    this.wardenData = [
      { id : '1' , name : 'mahesh'},
      { id : '2' , name : 'ramesh'},
      { id : '3' , name : 'rajesh'},
    ]
  }

  onAddWarden(){
    this.router.navigate(['../../../admin/employeeInfo/addWarden'])
  }

  onEditRoute(n){
    console.log(n)
    this.router.navigate(['../../../admin/employeeInfo/editWarden',n])
  }

}
