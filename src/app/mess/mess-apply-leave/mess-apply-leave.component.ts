import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-mess-apply-leave',
  templateUrl: './mess-apply-leave.component.html',
  styleUrls: ['./mess-apply-leave.component.css']
})
export class MessApplyLeaveComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private messService: MessService,
    private datePipe: DatePipe,
    private sharedService: SharedService
  ) { }

  applyLeaveDisplay = true;
  applyForm:FormGroup;
  historyOfLeaves:any;
  noData = null;
  

  ngOnInit(): void {
    if(this.applyLeaveDisplay){
      this.onForm();
    }else{
      this.getHistory();
    }
  }

  onForm(){
    const formDate = this.datePipe.transform(new Date() , 'yyyy-MM-dd');
    this.applyForm = this.fb.group({
      'from': new FormControl(formDate , [ Validators.required ]),
      'to' : new FormControl(null , [ Validators.required ]),
      'days' : new FormControl(null , [ Validators.required ]),
      'reason' : new FormControl(null , [ Validators.required ])
    })
  }

  getHistory(){
    this.sharedService.visibleSpinner(true);
    this.messService.historyLeaves()
    .subscribe(data => {
      this.historyOfLeaves = data;
      if(this.historyOfLeaves.length > 0){
        this.noData = false;
      }else{
        this.noData = true;
      }
      this.sharedService.visibleSpinner(false);
    })
  }

  onChangePage(){
    this.applyLeaveDisplay = !this.applyLeaveDisplay;
    if(this.applyLeaveDisplay){
      this.onForm();
    }else{
      this.getHistory();
    }
  }

  onSubmit(){
    if(this.applyForm.valid){
      this.sharedService.visibleSpinner(true);
      this.messService.applyForLeaves(this.applyForm.value)
      .subscribe(data => {
        this.sharedService.visibleSpinner(false);
        alert(data);
        this.onForm();
      },error => {
        this.sharedService.visibleSpinner(false);
        alert(error.error)
      })
    }
  }



}
