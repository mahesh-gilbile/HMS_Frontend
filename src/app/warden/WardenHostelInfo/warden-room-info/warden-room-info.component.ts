import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../../warden.service';

@Component({
  selector: 'app-warden-room-info',
  templateUrl: './warden-room-info.component.html',
  styleUrls: ['./warden-room-info.component.css']
})
export class WardenRoomInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private wardenService : WardenService,
    private sharedService : SharedService
  ) { }

  Room_ID : any;
  roomNumber:any;
  wingName:any;
  roomMemberDetails:any;
  hostelName:any;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.Room_ID = this.route.snapshot.paramMap.get('id');
    this.wardenService.getRoomDetails(this.Room_ID)
    .subscribe(data => {
      this.roomNumber = data['RoomID'];
      this.wingName = data['WingName'];
      this.hostelName = data['HostelName'];
      this.roomMemberDetails = data['RoomMembers'];
      // console.log(this.roomMemberDetails)
      this.sharedService.visibleSpinner(false);
    })
  }

  onRouteOnStudent(id){
    this.router.navigate(['../../warden/stdInfo' , id])
  }

}
