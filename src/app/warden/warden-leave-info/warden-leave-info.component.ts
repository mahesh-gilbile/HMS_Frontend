import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../warden.service';

@Component({
  selector: 'app-warden-leave-info',
  templateUrl: './warden-leave-info.component.html',
  styleUrls: ['./warden-leave-info.component.css']
})
export class WardenLeaveInfoComponent implements OnInit {

  constructor(
    private wardenService: WardenService,
    private sharedService: SharedService
  ) { }

  leaveInfoList:any;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.sharedService.visibleSpinner(true);
    this.wardenService.getStaffLeavesInfo()
    .subscribe(data => {
      this.leaveInfoList = data;
      // console.log(data);
      this.sharedService.visibleSpinner(false);
    })
  }

  onStatusChange(status , ID){
    this.sharedService.visibleSpinner(true);
    this.wardenService.changeStatus(status , ID)
    .subscribe(data => {
      // console.log(data);
      this.getData();
    })
  }
}
