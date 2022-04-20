import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-employee-info',
  templateUrl: './admin-employee-info.component.html',
  styleUrls: ['./admin-employee-info.component.css']
})
export class AdminEmployeeInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSecretory(){
    this.router.navigate(['../../admin/employeeInfo/secretoryInfo'])
  }

  onWarden(){
    this.router.navigate(['../../admin/employeeInfo/wardenInfo'])
  }

  onMessStaff(){
    this.router.navigate(['../../admin/employeeInfo/messStaffInfo'])
  }
  onSecurity(){
    this.router.navigate(['../../admin/employeeInfo/securityInfo'])
  }

}
