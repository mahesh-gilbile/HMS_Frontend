import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-room-details',
  templateUrl: './student-room-details.component.html',
  styleUrls: ['./student-room-details.component.css']
})
export class StudentRoomDetailsComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private sharedService: SharedService
  ) { }

  roomNumber:any;
  wingName:any;
  roomMateDetails:any;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.studentService.getRoomDetails()
    .subscribe((data) => {
      this.roomNumber = data.Room_ID;
      this.wingName = data.Wing_Name;
      this.roomMateDetails = data.Room_Mate_Details;
      this.sharedService.visibleSpinner(false);
    })
  }

}
