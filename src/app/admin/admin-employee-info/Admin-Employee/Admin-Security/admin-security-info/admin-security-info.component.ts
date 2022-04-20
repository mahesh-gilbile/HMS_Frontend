import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-security-info',
  templateUrl: './admin-security-info.component.html',
  styleUrls: ['./admin-security-info.component.css']
})
export class AdminSecurityInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  securityData:any[]
  ngOnInit(): void {
    this.securityData = [
      { id : '1' , name : 'mahesh'},
      { id : '2' , name : 'ramesh'},
      { id : '3' , name : 'rajesh'},
    ]
  }

  onAddSecurity(){
    this.router.navigate(['../../../admin/employeeInfo/addSecurity'])
  }

  onEditRoute(n){
    console.log(n)
    this.router.navigate(['../../../admin/employeeInfo/editSecurity',n])
  }

}
