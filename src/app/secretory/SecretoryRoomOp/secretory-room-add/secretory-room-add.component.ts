import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';

@Component({
  selector: 'app-secretory-room-add',
  templateUrl: './secretory-room-add.component.html',
  styleUrls: ['./secretory-room-add.component.css']
})
export class SecretoryRoomAddComponent implements OnInit {

  constructor(
    private secretoryService: SecretoryService,
    private sharedService: SharedService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  formData : FormGroup;
  hostelList = null;
  wingList = null;
  noOfBeds = [
    {value : 1},
    {value : 2},
    {value : 3},
  ]

  ngOnInit(): void {
    this.getHotelList();
    this.loadForm();
  }

  getHotelList(){
    this.sharedService.visibleSpinner(true);
    this.secretoryService.getHostelList()
    .subscribe(data => {
      this.hostelList = data;
      this.sharedService.visibleSpinner(false);
    })
  }

  loadForm(){
    this.formData = this.fb.group({
      'HostelID' : new FormControl(null , [Validators.required]),
      'WingID' : new FormControl(null , [Validators.required]),
      'NoOfBeds' : new FormControl(null , [Validators.required]),
      'Description' : new FormControl(null , [Validators.required])
    })
  }

  onChange(){
    this.sharedService.visibleSpinner(true);
    const hostelId = this.formData.get('HostelID').value;
    this.formData.controls.WingID.setValue(null);
    this.secretoryService.getWingList()
      .subscribe(data => {
        const winglist = [];
        for(let i=0 ; i < data.length ; i++){
          if(data[i].HostelID === hostelId){
            winglist.push(data[i]);
          }
        }
        this.wingList = null;
        this.wingList = winglist;
        this.sharedService.visibleSpinner(false);
      })
  }

  onSave(){
    if(this.formData.valid){
      this.secretoryService.addRoom(this.formData.value)
      .subscribe(data => {
        alert(data);
        this.router.navigate(['../../secretory/roomList'])
      })
    }
  }
}
