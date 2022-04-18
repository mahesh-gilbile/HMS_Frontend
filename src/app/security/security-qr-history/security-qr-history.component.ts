import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-qr-history',
  templateUrl: './security-qr-history.component.html',
  styleUrls: ['./security-qr-history.component.css']
})
export class SecurityQrHistoryComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private securityService: SecurityService
  ) { }

  todayQrHistory:any;
  oneQrHistory:any;
  date:any;
  parent = true;
  ngOnInit(): void {
    this.date = new Date()
    this.getHistory()
  }

  getHistory(){
    this.sharedService.visibleSpinner(true);
    this.securityService.getTodayQRHistory()
    .subscribe(data => {
      this.todayQrHistory = null;
      this.todayQrHistory = data
      this.sharedService.visibleSpinner(false);
    })
  }

  getQRCodeHistory(ID){
    this.parent = false;
    this.sharedService.visibleSpinner(true);
    this.securityService.getQRInfo(ID)
    .subscribe(data => {
      this.oneQrHistory = data.reverse();
      this.sharedService.visibleSpinner(false);
    })
  }

  onBack(){
    this.parent = true;
    this.getHistory();
  }

}
