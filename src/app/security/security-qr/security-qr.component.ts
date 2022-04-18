import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-qr',
  templateUrl: './security-qr.component.html',
  styleUrls: ['./security-qr.component.css']
})
export class SecurityQRComponent implements OnInit {

  constructor(
    private securityService: SecurityService,
    private sharedService: SharedService,
    private router: Router
  ) { 
    this.level = "L";
    this.width = 200;
    this.date = formatDate(new Date() , 'dd-MM-yyyy' , 'en-US' , '+530')
    this.day = this.days[(new Date).getDay()]
  }


  day:any;
  days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
  date:any;
  GateName: any;
  HostelName: any;

  public qrData = null;
  public level : "L" | "M" | "Q" | "H";
  public width:number;
  createQRStatus = false;

  ngOnInit(): void {
    this.getGateInfo()
  }

  getGateInfo(){
    this.sharedService.visibleSpinner(true);
    this.securityService.getGateInfo()
    .subscribe(data => {
      this.GateName = data.GateName;
      this.HostelName = data.HostelName;
      this.sharedService.visibleSpinner(false);
    })
  }

  generateQRCode(){
    this.securityService.generateQRCode()
    .subscribe(data => {
      this.createQR(data);
    })
  }

  createQR(data){
    this.createQRStatus = true;
    const modifiedData = {
      'title' : "Hostel Management System",
      'For' : 'Gate Entry',
      'Password1' : data.QR_Code1,
      'Password2' : data.QR_Code2,
      'Date' : data.Date,
      'Time' : data.Time,
    }
    this.qrData = JSON.stringify(modifiedData);
  }

  closeQR(){
    this.createQRStatus = false;
  }

  routeOnHistory(){
    this.router.navigate(['../../security/qrHistory']);
  }
}
