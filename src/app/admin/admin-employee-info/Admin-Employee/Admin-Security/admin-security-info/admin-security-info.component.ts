import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../../admin.service';

@Component({
  selector: 'app-admin-security-info',
  templateUrl: './admin-security-info.component.html',
  styleUrls: ['./admin-security-info.component.css']
})
export class AdminSecurityInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService,
    private SharedService: SharedService
  ) { }

  securityData:any[]
  ngOnInit(): void {
    this.SharedService.visibleSpinner(true);
    this.adminService.getSecuritiesInfo()
    .subscribe(data => {
      this.securityData = data;
      // console.log(data);
      this.SharedService.visibleSpinner(false);
    })
  }

  onAddSecurity(){
    this.router.navigate(['../../../admin/employeeInfo/addSecurity'])
  }

  onEditRoute(n){
    this.router.navigate(['../../../admin/employeeInfo/editSecurity',n])
  }

}
