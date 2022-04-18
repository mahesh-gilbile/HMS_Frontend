import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-mess-qr',
  templateUrl: './mess-qr.component.html',
  styleUrls: ['./mess-qr.component.css']
})
export class MessQRComponent implements OnInit {

  day:any;
  days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
  date:any;
  constructor(
    private messService: MessService,
    private sharedService: SharedService,
    private router : Router
  ) {
    this.level = "L";
    this.width = 200;
    this.date = formatDate(new Date() , 'dd-MM-yyyy' , 'en-US' , '+530')
    this.day = this.days[(new Date).getDay()]
   }

   public qrData = null;
   public level : "L" | "M" | "Q" | "H";
   public width:number;
   createQRStatus = false;
   startDayStatus:any;
   errorMessage = null;

  ngOnInit(): void {
    this.startDayStatusFun();
  }

  startDayStatusFun(){
    this.sharedService.visibleSpinner(true);
    this.messService.getTodayDayStartStatus()
    .subscribe(data => {
      this.startDayStatus = data;
      this.sharedService.visibleSpinner(false);
    })
  }

  startYourDay(){
    this.sharedService.visibleSpinner(true);
    this.messService.startYourDay()
    .subscribe(data => {
      this.sharedService.visibleSpinner(false);
      this.startDayStatus = true;
    },error =>{
      console.log(error);
    })
  }

  generateQRCode(){
    this.sharedService.visibleSpinner(true);
    this.messService.generateQRCode()
    .subscribe(data => {
      this.createQR(data[0]);
      this.errorMessage = null;
      this.sharedService.visibleSpinner(false);
    },error => {
      if(error.error === 'Nothing'){
        this.errorMessage = "It's not proper time to generate QR code";
      }else if(error.error === 'Please Start Your Day'){
        this.startDayStatus = false;
      }
      this.sharedService.visibleSpinner(false);
    })
  }

  createQR(data){
    this.createQRStatus = true;
    // var randomstring = Math.random().toString(36);
    // var randomstring2 = Math.random().toString(36);
    // var randomstring3 = Math.random().toString(36);
    // var randomstring4 = Math.random().toString(36);
    // var data = {
    //   'title' : 'Hostel Management System',
    //   'For' : 'Mess',
    //   'Type' : 'Breakfast',
    //   'Password1' : randomstring + randomstring2,
    //   'Password2' : randomstring3 + randomstring4,
    //   'QRCreateTime' : formatDate(new Date() , 'dd-MM-yyyy hh:mm:ss' , 'en-US' , '+530')
    // }

    const modifiedData = {
      'title' : 'Hostel Management System',
      'For' : 'Mess',
      'Type' : data.Type,
      'Password1' : data.QR_Code1,
      'Password2' : data.QR_Code2,
      'Date' : data.Date,
      'Time' : data.Time
    }
    this.qrData = JSON.stringify(modifiedData);
  }

  closeQR(){
    this.createQRStatus = false;
  }


  onTodayHistory(){
    this.router.navigate(['../../mess/todayHistory'])
  }

  onQRHistory(){
    this.router.navigate(['../../mess/qrHistory'])
  }

}
