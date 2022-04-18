import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Student } from 'src/app/SharedModule/models/student.model';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../../warden.service';

@Component({
  selector: 'app-warden-student-info',
  templateUrl: './warden-student-info.component.html',
  styleUrls: ['./warden-student-info.component.css']
})
export class WardenStudentInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private wardenService: WardenService,
    private sharedService: SharedService
  ) { }

  stdID : any;
  studentInfo = {
    fn : '',
    mn : '',
    ln : '',
    DOB : '',
    gender : '',
    email : '',
    mobn : '',
    add : '',
    course : '',
    branch : '',
  };
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.stdID = this.route.snapshot.paramMap.get('id');
    this.wardenService.getStudentDetails(this.stdID)
    .pipe(map(data => {
      return {
        StudentId : data.data[0],
        FirstName : data.data[1],
        MiddleName : data.data[2],
        LastName : data.data[3],
        Gender : data.data[4],
        Age : data.data[5],
        Citizen : data.data[6],
        Email : data.data[7],
        MobileNumber : data.data[8],
        DOB : data.data[9],
        Address : data.data[10],
        Course : data.data[15],
        Branch : data.data[16],
        CourseDuration : data.data[17],
        Year : data.data[18],
      };
    }
    ))
.subscribe((data:Student) => {
  this.studentInfo.fn = data.FirstName;
  this.studentInfo.mn = data.MiddleName;
  this.studentInfo.ln = data.LastName;
  this.studentInfo.DOB = data.DOB.substring(0,2) + " " + this.sharedService.getMonth(data.DOB.substring(3,5)) + " "+ data.DOB.substring(6,10);
  this.studentInfo.add = data.Address;
  this.studentInfo.gender = data.Gender;
  this.studentInfo.email = data.Email;
  this.studentInfo.branch = data.Branch;
  this.studentInfo.course = data.Course;
  this.studentInfo.mobn = data.MobileNumber;
  
  // console.log(this.studentInfo);
  this.sharedService.visibleSpinner(false);
})
  }

}
