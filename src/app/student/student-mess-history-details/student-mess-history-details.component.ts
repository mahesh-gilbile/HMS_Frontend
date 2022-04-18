import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-mess-history-details',
  templateUrl: './student-mess-history-details.component.html',
  styleUrls: ['./student-mess-history-details.component.css']
})
export class StudentMessHistoryDetailsComponent implements OnInit {

  constructor(
    private studentService : StudentService,
    private sharedService : SharedService
  ) { }

  messHistory:any;

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.studentService.getMessHistory()
    .subscribe(data => {
      this.messHistory = data;
      console.log(data);
      this.sharedService.visibleSpinner(false);
    })
  }

}
