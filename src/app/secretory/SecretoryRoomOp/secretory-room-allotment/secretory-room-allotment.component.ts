import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';
import { NotAltStdComponent } from '../not-alt-std/not-alt-std.component';

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
    private route : ActivatedRoute,
    public dialog: MatDialog
  ) { }

  roomId : any = null;
  roomDetails : any = null;
  roomAltDetails : any = null;
  noofbeds : any = null;

  ngOnInit(): void {
    this.loadData();  
  }

  loadData(){
    this.sharedService.visibleSpinner(true);
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.secretoryService.getAltInfo(this.roomId)
    .subscribe(data => {
      this.roomDetails = data.RoomDetails[0];
      this.roomAltDetails = data.RoomAllotmentDetails;
      this.noofbeds = this.roomAltDetails;
      if(this.noofbeds.length !== +this.roomDetails.NoOfBeds){
        const count = this.roomDetails.NoOfBeds - this.noofbeds.length;
        for(let i = 0 ; i < count ; i++){
          this.noofbeds.push({ID : null});
        }
      }
      this.sharedService.visibleSpinner(false);
    })
  }

  openDialogUpdate(ID): void {
    const dialogRef = this.dialog.open(NotAltStdComponent, {
      width: '800px',
      data: {ID : ID , callby: 'Update'},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.loadData();    
    });
  }

  openDialogAdd(ID): void {
    const dialogRef = this.dialog.open(NotAltStdComponent, {
      width: '800px',
      data: {ID : this.roomId , callby: 'Add'},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.loadData();    
    });
  }



}
