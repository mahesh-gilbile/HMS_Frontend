import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-dashbaord',
  templateUrl: './security-dashbaord.component.html',
  styleUrls: ['./security-dashbaord.component.css']
})
export class SecurityDashbaordComponent implements OnInit {

  constructor(
    private securityService : SecurityService,
    private sharedService : SharedService
  ) { }

  securityStaffInfo = {
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
    this.securityService.getSecurityStaffInfo()
    .subscribe(data => {
      // console.log(data);
      this.securityStaffInfo.fn = data[1];
      this.securityStaffInfo.mn = data[2];
      this.securityStaffInfo.ln = data[3];
      this.securityStaffInfo.gender = data[4];
      this.securityStaffInfo.email = data[6];
      this.securityStaffInfo.DOB = data[9].substring(0,2) + " " + this.sharedService.getMonth(data[9].substring(3,5)) + " " + data[9].substring(6,10);
      this.securityStaffInfo.mobn = data[7];
      this.securityStaffInfo.add = data[10];
      console.log(this.securityStaffInfo);
    })
  }

}
