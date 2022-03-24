import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-guardian-details',
  templateUrl: './student-guardian-details.component.html',
  styleUrls: ['./student-guardian-details.component.css']
})
export class StudentGuardianDetailsComponent implements OnInit {

  constructor(
    private studentService : StudentService,
    private sharedService : SharedService
  ) { }

  guardianInfo = {
    fn : '',
    mn : '',
    ln : '',
    relation: '',
    DOB : '',
    gender : '',
    email : '',
    mobn : '',
    add : '',
    occupation : '',
  }
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.studentService.getGuardianInfo()
    .subscribe(data => {
      this.guardianInfo.fn = data[2];
      this.guardianInfo.mn = data[3];
      this.guardianInfo.ln = data[4];
      this.guardianInfo.relation = data[5];
      this.guardianInfo.DOB = data[11];
      this.guardianInfo.gender = data[6];
      this.guardianInfo.email = data[9];
      this.guardianInfo.mobn = data[10];
      this.guardianInfo.add = data[12];
      this.guardianInfo.occupation = data[8];
      this.sharedService.visibleSpinner(false);
    })
  }

}
