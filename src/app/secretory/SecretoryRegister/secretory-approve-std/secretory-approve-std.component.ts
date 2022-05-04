import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';

@Component({
  selector: 'app-secretory-approve-std',
  templateUrl: './secretory-approve-std.component.html',
  styleUrls: ['./secretory-approve-std.component.css']
})
export class SecretoryApproveStdComponent implements OnInit {

  constructor(
    private secretoryService: SecretoryService,
    private sharedService: SharedService,
    private router: Router,
    private route : ActivatedRoute,
    private fb : FormBuilder,
    private datePipe : DatePipe
  ) { }

  stdId:any;
  stdData = null;
  checkStd = false;
  checkStdEdu = false;
  checkGua = false;
  collectDoc = false;
  collectAdmLtr = false;
  checkFeesData = false;
  formData : FormGroup;

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.stdId = this.route.snapshot.paramMap.get('id')
    this.secretoryService.getSingleRegisterStdInfo(this.stdId)
    .subscribe(data => {
      this.stdData = data[0];
      this.sharedService.visibleSpinner(false);
    })
    this.loadForm();
  }

  loadForm(){
    this.formData = this.fb.group({
      'Amount' : new FormControl(null , [Validators.required]),
      'Year' : new FormControl(null , [Validators.required]),
      'JoinDate' : new FormControl(null , [Validators.required]),
      'EndDate' : new FormControl(null , [Validators.required]),
    })
  }  

  changeStatuscheckStd(){
    this.checkStd = !this.checkStd;
    if(this.checkStd === false){
      this.getCancel();
    }
  }

  changeStatuscheckStdEdu(){
    this.checkStdEdu = !this.checkStdEdu;
    if(this.checkStdEdu === false){
      this.getCancel();
    }
  }

  changeStatuscheckGua(){
    this.checkGua = !this.checkGua;
    if(this.checkGua === false){
      this.getCancel();
    }
  }

  changeStatuscheckCollectDoc(){
    this.collectDoc = !this.collectDoc;
  }

  changeStatuscheckCollectAdmLtr(){
    this.collectAdmLtr = !this.collectAdmLtr;
  }

  changeStatusFees(){
    if(this.formData.valid){
      this.checkFeesData = !this.checkFeesData;
    }
  }

  getApproveStatus(){
    if(this.checkGua === true && this.checkStd === true && this.checkStdEdu === true && this.collectDoc === true && this.collectAdmLtr === true){
      return false;
    }
    return true;
  }

  getCancel(){
    this.collectDoc = false;
    this.collectAdmLtr = false;
  }

  // approve(){
  //   if(!this.getApproveStatus()){
  //     this.secretoryService.approveAdmission(this.stdId)
  //     .subscribe(data => {
  //       alert(data);
  //       this.router.navigate(['../../../secretory/stdRegisterList'])
  //     })
  //   }
  // }
  
  setProperDate(date){
    return this.datePipe.transform(date , 'dd/MM/yyyy');
  }

  onSave(){
    if(!this.getApproveStatus() && this.formData.valid){
      const join = this.formData.get('JoinDate').value;
      const end = this.formData.get('EndDate').value;
      this.formData.controls.JoinDate.setValue(this.setProperDate(join));
      this.formData.controls.EndDate.setValue(this.setProperDate(end));
      this.secretoryService.approveAdmission(this.stdId , this.formData.value)
      .subscribe(data => {
        alert(data);
        this.router.navigate(['../../../secretory/stdRegisterList'])
      })
    }
  }




}
