import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-gate-history',
  templateUrl: './student-gate-history.component.html',
  styleUrls: ['./student-gate-history.component.css']
})
export class StudentGateHistoryComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private sharedService: SharedService
  ) { }

  gateHistory:any;

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.studentService.getGateHistory()
    .subscribe(data => {
      this.gateHistory = data.reverse();
      this.sharedService.visibleSpinner(false);
    })
  }

}

