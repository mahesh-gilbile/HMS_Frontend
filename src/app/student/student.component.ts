import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  public getScreenWidth:any;
  public getScreenHeight:any;
  public mobile = false;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.setResponsive(this.getScreenWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.setResponsive(this.getScreenWidth);
  }

  setResponsive(n){
    if(n >= 480){
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

}
