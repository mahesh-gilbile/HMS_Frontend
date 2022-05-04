import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../secretory.service';

@Component({
  selector: 'app-secretory-fees',
  templateUrl: './secretory-fees.component.html',
  styleUrls: ['./secretory-fees.component.css']
})
export class SecretoryFeesComponent implements OnInit {

  constructor(
    private secretoryService: SecretoryService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  stdID:any;
  stdInfo = null;
  feesPaid = null;
  hostelFees = null;
  messFees = null;
  feesData: FormGroup;
  checkStatus = false;
  errorMessage = null;
  paymentMethod: any[] = [
    {value : 'CASH'},
    {value : 'CARD'},
    {value : 'CHEQUE'},
    {value : 'DEMAND DRAFT'}
  ]

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.loadForm();
    this.loadPage();
    
    this.feesData.get("Amount").valueChanges.subscribe(data => {
      if(this.checkStatus){
        this.onChangeCheck();
      }
    })

    this.feesData.get("paymentmethod").valueChanges.subscribe(data => {
      if(this.checkStatus){
        this.onChangeCheck();
      }
    })
  }

  loadPage(){
    this.stdID = this.route.snapshot.paramMap.get('id');
    this.secretoryService.getStudentFeesInfo(this.stdID)
    .subscribe(data => {
      this.feesPaid = data.FeesPaid;
      this.hostelFees = data.HostelFees;
      this.messFees = data.MessFees;
      this.stdInfo = data.StudentInfo[0];
      // console.log(this.stdInfo);
      this.sharedService.visibleSpinner(false);
    })

  }

  getTotalMessFees(){
    if(this.messFees != null){
      var totalAmount = 0;
      for(let f of this.messFees){
        totalAmount = totalAmount + +f.TotalAmount;
      }
      return totalAmount;
    }
  }

  getTotalHostelFees(){
    if(this.hostelFees != null){
      var totalAmount = 0;
      for(let f of this.hostelFees){
        totalAmount = totalAmount + +f.Amount;
      }
      return totalAmount;
    }
  }

  getTotalFeesPaid(){
    if(this.feesPaid != null){
      var totalAmount = 0;
      for(let f of this.feesPaid){
        totalAmount = totalAmount + +f.Amount;
      }
      return totalAmount;
    }
  }

  feesPending(){
    var pending = this.getTotalHostelFees() + this.getTotalMessFees() - this.getTotalFeesPaid();
    return pending;
  }

  loadForm(){
    this.feesData = this.fb.group({
      'Amount': new FormControl(null , [Validators.required]),
      'paymentmethod' : new FormControl(null , [Validators.required])
    })
  }

  onSave(){
    const feesAmount =  Math.round(this.feesData.get('Amount').value);
    let balanceAmount = this.feesPending();
    balanceAmount = Math.round(balanceAmount)
    if(feesAmount <= balanceAmount){
      this.secretoryService.payment(this.feesData.value , this.stdID)
      .subscribe(data => {
        // console.log(data);
        alert(data);
        this.feesData.reset();
        this.errorMessage = null;
        this.loadPage();
      })
    }else{
      this.errorMessage = "Amount should not be more than pending Amount."
      this.onChangeCheck();
    }
  }

  onChangeCheck(){
    this.checkStatus = !this.checkStatus;
  }

}
