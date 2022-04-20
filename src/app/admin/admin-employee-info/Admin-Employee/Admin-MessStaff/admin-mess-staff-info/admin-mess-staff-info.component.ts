import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-mess-staff-info',
  templateUrl: './admin-mess-staff-info.component.html',
  styleUrls: ['./admin-mess-staff-info.component.css']
})
export class AdminMessStaffInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  messStaffData:any[]
  ngOnInit(): void {
    this.messStaffData = [
      { id : '1' , name : 'mahesh'},
      { id : '2' , name : 'ramesh'},
      { id : '3' , name : 'rajesh'},
    ]
  }

  onAddMessStaff(){
    this.router.navigate(['../../../admin/employeeInfo/addMessStaff'])
  }

  onEditRoute(n){
    console.log(n)
    this.router.navigate(['../../../admin/employeeInfo/editMessStaff',n])
  }

}
