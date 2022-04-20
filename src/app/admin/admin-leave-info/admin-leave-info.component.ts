import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-leave-info',
  templateUrl: './admin-leave-info.component.html',
  styleUrls: ['./admin-leave-info.component.css']
})
export class AdminLeaveInfoComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private sharedService: SharedService
  ) { }

  leaveInfoList:any;
  ngOnInit(): void {
    this.getData()
  }

  getData(){

  }

  onStatusChange(status , ID){
    
  }



}
