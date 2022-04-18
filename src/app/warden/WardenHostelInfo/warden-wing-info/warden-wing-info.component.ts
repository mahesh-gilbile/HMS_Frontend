import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../../warden.service';

@Component({
  selector: 'app-warden-wing-info',
  templateUrl: './warden-wing-info.component.html',
  styleUrls: ['./warden-wing-info.component.css']
})
export class WardenWingInfoComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private wardenService : WardenService,
    private sharedService : SharedService,
    private router : Router
  ) { }


  wing_ID : any;
  HostelName : any;
  WingName : any;
  RoomDetails : any;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.wing_ID = this.route.snapshot.paramMap.get('id')
    this.wardenService.getWingDetails(this.wing_ID)
    .subscribe(data => {
      this.HostelName = data['HostelName'];
      this.WingName = data['WingName'];
      this.RoomDetails = data['RoomDetails'];
      this.sharedService.visibleSpinner(false);
    })
  }

  onRoomReDirect(id){
    this.router.navigate(['../../warden/roomInfo',id]);
  }



}
