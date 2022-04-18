import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../warden.service';

@Component({
  selector: 'app-warden-dashboard',
  templateUrl: './warden-dashboard.component.html',
  styleUrls: ['./warden-dashboard.component.css']
})
export class WardenDashboardComponent implements OnInit {

  constructor(
    private wardenService : WardenService,
    private sharedService : SharedService
  ) { }


  wardenInfo = {
    fn : '',
    mn : '',
    ln : '',
    DOB : '',
    gender : '',
    email : '',
    mobn : '',
    add : '',
  }

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.wardenService.getWardenInfo()
    .subscribe(data => {
      this.wardenInfo.fn = data[1];
      this.wardenInfo.mn = data[2];
      this.wardenInfo.ln = data[3];
      this.wardenInfo.gender = data[4];
      this.wardenInfo.email = data[6];
      this.wardenInfo.DOB = data[9].substring(0,2) + " " + this.sharedService.getMonth(data[9].substring(3,5)) + " " + data[9].substring(6,10);
      this.wardenInfo.mobn = data[7];
      this.wardenInfo.add = data[10];
      this.sharedService.visibleSpinner(false);
    })
  }

}
