import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter , map } from "rxjs/operators";
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private studentService : StudentService
  ) { }

  headerText : string;
  studentName : string;
  ngOnInit(): void {
    this.headerText = this.activatedRoute.firstChild.snapshot.data['title'];
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
        })
      ).subscribe((ttl: string) => {
        this.headerText = ttl;
      });

    this.studentService.getStudentInfo()
    .subscribe((data) => {
      this.studentName = data.data[1] + " " + data.data[3];
    })
  }

}
