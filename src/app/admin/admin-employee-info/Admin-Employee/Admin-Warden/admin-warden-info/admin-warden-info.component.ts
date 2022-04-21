import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../../admin.service';

@Component({
  selector: 'app-admin-warden-info',
  templateUrl: './admin-warden-info.component.html',
  styleUrls: ['./admin-warden-info.component.css']
})
export class AdminWardenInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService,
    private SharedService: SharedService
  ) { }

  wardenData:any[]
  ngOnInit(): void {
    this.SharedService.visibleSpinner(true);
    this.adminService.getWardensInfo()
    .subscribe(data => {
      this.wardenData = data;
      // console.log(data);
      this.SharedService.visibleSpinner(false);
    })
  }

  onAddWarden(){
    this.router.navigate(['../../../admin/employeeInfo/addWarden'])
  }

  onEditRoute(n){
    // console.log(n)
    this.router.navigate(['../../../admin/employeeInfo/editWarden',n])
  }

}
