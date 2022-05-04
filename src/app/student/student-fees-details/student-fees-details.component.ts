import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-fees-details',
  templateUrl: './student-fees-details.component.html',
  styleUrls: ['./student-fees-details.component.css']
})
export class StudentFeesDetailsComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private sharedService: SharedService
  ) { }

  feesPaid = null;
  hostelFees = null;
  messFees = null;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.studentService.getStudentFees()
    .subscribe(data => {
      this.feesPaid = data.FeesPaid;
      this.hostelFees = data.HostelFees;
      this.messFees = data.MessFees;
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
}
