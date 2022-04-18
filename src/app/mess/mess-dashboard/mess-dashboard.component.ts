import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-mess-dashboard',
  templateUrl: './mess-dashboard.component.html',
  styleUrls: ['./mess-dashboard.component.css']
})
export class MessDashboardComponent implements OnInit {

  constructor(
    private messService : MessService,
    private sharedService : SharedService
  ) { }

  messStaffInfo = {
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
    this.messService.getMessStaffInfo()
    .subscribe(data => {
      this.messStaffInfo.fn = data[1];
      this.messStaffInfo.mn = data[2];
      this.messStaffInfo.ln = data[3];
      this.messStaffInfo.gender = data[4];
      this.messStaffInfo.email = data[6];
      this.messStaffInfo.DOB = data[9].substring(0,2) + " " + this.sharedService.getMonth(data[9].substring(3,5)) + " " + data[9].substring(6,10);
      this.messStaffInfo.mobn = data[7];
      this.messStaffInfo.add = data[10];
      // console.log(this.messStaffInfo);
      this.sharedService.visibleSpinner(false);
    })
  }


}
