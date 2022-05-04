import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';

@Component({
  selector: 'app-secretory-room-list',
  templateUrl: './secretory-room-list.component.html',
  styleUrls: ['./secretory-room-list.component.css']
})
export class SecretoryRoomListComponent implements OnInit {

  constructor(
    private secretoryService: SecretoryService,
    private sharedService : SharedService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  roomList :any[] = null;
  formData : FormGroup;
  hostelList = null;
  wingList = null;

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.loadForm();
    this.getHostelList();
    this.getWingList();
    this.getRoomList();
    this.sharedService.visibleSpinner(false);
  }

  loadForm(){
    this.formData = this.fb.group({
      'HostelID' : new FormControl(null),
      'WingID' : new FormControl(null)
    })
  }

  getHostelList(){
    this.secretoryService.getHostelList()
    .subscribe(data => {
      this.hostelList = data;
      this.hostelList.push({"HostelID" : null , "HostelName" : "None"});
      // console.log(this.hostelList);
    })
  }

  getWingList(){
    this.secretoryService.getWingList()
    .subscribe(data => {
      this.wingList = data;
      this.wingList.push({"WingID" : null , "WingName" : "None"});
      // console.log(this.wingList);
    })
  }

  getRoomList(){
    this.secretoryService.getRoomList()
    .subscribe(data => {
      // console.log(data);
      this.roomList = data;
    })
  }

  onChange(){
    const hostelID = this.formData.get('HostelID').value;
    if(hostelID !== null){
      this.secretoryService.getRoomList()
      .subscribe(data => {
        const roomlist = [];
        for(let i = 0 ; i < data.length ; i++){
          if(data[i].HostelID === hostelID){
            roomlist.push(data[i]);
          }
        }
        this.roomList = null;
        this.roomList = roomlist;
      })
      this.secretoryService.getWingList()
      .subscribe(data => {
        const winglist = [];
        for(let i=0 ; i < data.length ; i++){
          if(data[i].HostelID === hostelID){
            winglist.push(data[i]);
          }
        }
        this.wingList = null;
        this.wingList = winglist;
      })
    }else{
      this.getRoomList();
      this.getWingList();
    }
    this.formData.controls.WingID.setValue(null);
  }

  onChangeWing(){
    const wingID = this.formData.get('WingID').value;
    if( wingID !== null){
      this.secretoryService.getRoomList()
      .subscribe(data => {
        const roomlist = [];
        for(let i = 0 ; i < data.length ; i++){
          if(data[i].WingID === wingID){
            roomlist.push(data[i]);
          }
        }
        this.roomList = null;
        this.roomList = roomlist;
      })
    }
  }

  onAddRoom(){
    this.router.navigate(['../../secretory/addRoom']);
  }

  onAllotRoom(id){
    this.router.navigate(['../../secretory/roomalt' , id]);
  }

}
