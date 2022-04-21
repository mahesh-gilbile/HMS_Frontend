import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private sharedService: SharedService
  ) { }

  adminInfo = {
    fn : '',
    mn : '',
    ln : '',
    gender : '',
    email : '',
    DOB : '',
    mobn : '',
    add : ''
  }

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.adminService.getAdminInfo()
    .subscribe(
      data => {
        this.adminInfo.fn = data[1];
        this.adminInfo.mn = data[2];
        this.adminInfo.ln = data[3];
        this.adminInfo.gender = data[5];
        this.adminInfo.email = data[6];
        this.adminInfo.DOB = data[8].substring(0,2) + " " + this.sharedService.getMonth(data[8].substring(3,5)) + " " + data[8].substring(6,10);
        this.adminInfo.mobn = data[7];
        this.adminInfo.add = data[9];
        this.sharedService.visibleSpinner(false);
      }
    )
  }

}
