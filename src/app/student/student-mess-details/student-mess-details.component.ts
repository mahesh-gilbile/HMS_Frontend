import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { memoryUsage } from 'process';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-mess-details',
  templateUrl: './student-mess-details.component.html',
  styleUrls: ['./student-mess-details.component.css']
})
export class StudentMessDetailsComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  public getScreebWidth:any;
  public mobile = false;

  breakfast = { 'menu' : '' , 'description' : ''};
  lunch = { 'menu' : '' , 'description' : ''};
  dinner = { 'menu' : '' , 'description' : ''};
  ngOnInit(): void {
    this.onWindowResize();
    this.sharedService.visibleSpinner(true);
    this.studentService.getTodaysMenu()
    .subscribe((data) => {
      for(let d of data){
        if(d.Food_Type === 'Breakfast'){
          this.breakfast.menu = d.Food_Menu;
          this.breakfast.description = d.Food_Description
        }else if(d.Food_Type === 'Lunch'){
          this.lunch.menu = d.Food_Menu;
          this.lunch.description = d.Food_Description;
        }else if(d.Food_Type === 'Dinner'){
          this.dinner.menu = d.Food_Menu;
          this.dinner.description = d.Food_Description;
        }
      }
      this.sharedService.visibleSpinner(false);
    })
  }

  weeklyMenu(){
    this.router.navigate(['../../student/weekly_menu']);
  }

  @HostListener('window:resize' , ['$event'])
  onWindowResize(){
    this.getScreebWidth = window.innerWidth;
    this.setResponsive(this.getScreebWidth);
  }

  setResponsive(n){
    if(n >= 480){
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }


}
