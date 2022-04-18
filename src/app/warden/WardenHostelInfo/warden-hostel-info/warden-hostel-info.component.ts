import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../../warden.service';

@Component({
  selector: 'app-warden-hostel-info',
  templateUrl: './warden-hostel-info.component.html',
  styleUrls: ['./warden-hostel-info.component.css']
})
export class WardenHostelInfoComponent implements OnInit {

  constructor(
    private wardenService : WardenService,
    private sharedService : SharedService,
    private router : Router
  ) { }

  wingDetails;
  Hostelname;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.wardenService.getHostelDetails()
    .subscribe(data => {
      this.Hostelname = data['HostelName'];
      this.wingDetails = data['WingDetails'];
      this.sharedService.visibleSpinner(false);
    })
  }

  onWingPageRedirect(id){
    this.router.navigate(['../../warden/wingInfo',id]);
  }


}
