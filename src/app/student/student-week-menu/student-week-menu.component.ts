import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-week-menu',
  templateUrl: './student-week-menu.component.html',
  styleUrls: ['./student-week-menu.component.css']
})
export class StudentWeekMenuComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private sharedService: SharedService
  ) { }

  week_menu = [
    { 'day' : 'Sunday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
    { 'day' : 'Monday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
    { 'day' : 'Tuesday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
    { 'day' : 'Wednesday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
    { 'day' : 'Thursday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
    { 'day' : 'Friday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
    { 'day' : 'Saturday' , 'Breakfast' : '' , 'Lunch' : '' , 'Dinner' : ''},
  ]
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.studentService.getMessMenu()
    .subscribe(data => {
      for(let m of this.week_menu){
        for(let d of data){
          if(d.Day === m.day && d.Food_Type === 'Breakfast'){
            m.Breakfast = d.Food_Menu
          }else if(d.Day === m.day && d.Food_Type === 'Lunch'){
            m.Lunch = d.Food_Menu
          }else if(d.Day === m.day && d.Food_Type === 'Dinner'){
            m.Dinner = d.Food_Menu
          }
        }
      }
      this.sharedService.visibleSpinner(false);
      // console.log(this.week_menu);
    })
  }

}
