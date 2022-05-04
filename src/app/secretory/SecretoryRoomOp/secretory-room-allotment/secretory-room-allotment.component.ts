import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';

@Component({
  selector: 'app-secretory-room-allotment',
  templateUrl: './secretory-room-allotment.component.html',
  styleUrls: ['./secretory-room-allotment.component.css']
})
export class SecretoryRoomAllotmentComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private secretoryService: SecretoryService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  roomId : any = null;
  roomDetails : any = null;
  roomAltDetails : any = null;

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.secretoryService.getAltInfo(this.roomId)
    .subscribe(data => {
      this.roomDetails = data.RoomDetails[0];
      this.roomAltDetails = data.RoomAllotmentDetails;
      console.log(this.roomDetails);
      console.log(this.roomAltDetails);
    })
  }

}
