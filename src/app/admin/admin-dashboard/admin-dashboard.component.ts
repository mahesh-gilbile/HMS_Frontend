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
  }

}
