import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../secretory.service';

@Component({
  selector: 'app-secretory-dashboard',
  templateUrl: './secretory-dashboard.component.html',
  styleUrls: ['./secretory-dashboard.component.css']
})
export class SecretoryDashboardComponent implements OnInit {

  constructor(
    private secretoryService : SecretoryService,
    private sharedService : SharedService
  ) { }

  secretoryInfo = {
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
    this.secretoryService.getSecretoryInfo()
    .subscribe(data => {
      this.secretoryInfo.fn = data[1];
      this.secretoryInfo.mn = data[2];
      this.secretoryInfo.ln = data[3];
      this.secretoryInfo.gender = data[5];
      this.secretoryInfo.email = data[6];
      this.secretoryInfo.DOB = data[8].substring(0,2) + " " + this.sharedService.getMonth(data[8].substring(3,5)) + " " + data[8].substring(6,10);
      this.secretoryInfo.mobn = data[7];
      this.secretoryInfo.add = data[9];
      this.sharedService.visibleSpinner(false);
    })
  }

}
