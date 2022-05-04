import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../warden.service';

@Component({
  selector: 'app-warden-student-list',
  templateUrl: './warden-student-list.component.html',
  styleUrls: ['./warden-student-list.component.css']
})
export class WardenStudentListComponent implements OnInit {

  constructor(
    private wardenService: WardenService,
    private sharedService: SharedService,
    private router : Router
  ) { }

  stdList : any;
  searchName : any;
  
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.wardenService.getStudentList()
    .subscribe(data => {
      // console.log(data);
      this.stdList = data;
      this.sharedService.visibleSpinner(false);
    })
  }

  onClick(id){
    this.router.navigate(['../../warden/stdInfo/' + id])
  }

}
