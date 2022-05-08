import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';
import { SecretoryRoomAllotmentComponent } from '../secretory-room-allotment/secretory-room-allotment.component';

@Component({
  selector: 'app-not-alt-std',
  templateUrl: './not-alt-std.component.html',
  styleUrls: ['./not-alt-std.component.css']
})
export class NotAltStdComponent implements OnInit {

  data : any = null;
  stdList : any = null;
  selectStdID : any = null;
  stdData : any = null;
  constructor(
    private sharedService: SharedService,
    private secretoryService: SecretoryService,
    public dialogRef: MatDialogRef<SecretoryRoomAllotmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any,
  ) { 
    this.data = data1;
  }

  ngOnInit(): void {
    if(this.data.callby === 'Update'){
      this.callByUpdate();
    }else if(this.data.callby === 'Add'){
      this.callByAdd();
    }
  }

  callByUpdate(){
    this.secretoryService.getNotAltStd()
    .subscribe(data => {
      this.stdList = data;
      this.stdList.push({StudentID: 'null' , FN : 'No Student'});
      // console.log(this.stdList);
    })
  }

  callByAdd(){
    this.secretoryService.getNotAltStd()
    .subscribe(data => {
      this.stdList = data;
    })
  }

  onSelect(){
    if(this.selectStdID === 'null'){
      this.secretoryService.deleteRA(this.data.ID)
      .subscribe(data => {
        alert(data);
        this.closeDilog();
      })
    }else{
      this.secretoryService.updateRa({"ID" : this.data.ID , "StudentID" : this.selectStdID})
      .subscribe(data => {
        alert(data);
        this.closeDilog();
      })
    }
  }

  onSelectAdd(){
    this.secretoryService.addRA({"RoomID" : this.data.ID , "StudentID" : this.selectStdID})
    .subscribe(data => {
      alert(data);
      this.closeDilog();
    })
  }

  onChange(data){
    this.selectStdID = data.StudentID;
    this.stdData = data;
  }

  closeDilog(){
    this.dialogRef.close();
  }

}
