import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../secretory.service';

@Component({
  selector: 'app-secretory-list-student',
  templateUrl: './secretory-list-student.component.html',
  styleUrls: ['./secretory-list-student.component.css']
})
export class SecretoryListStudentComponent implements OnInit {

  constructor(
    private secretoryService: SecretoryService,
    private sharedService: SharedService,
    private router : Router
  ) { }

  stdList : any;
  searchName : any;
  
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.secretoryService.getStudentList()
    .subscribe(data => {
      // console.log(data);
      this.stdList = data;
      this.sharedService.visibleSpinner(false);
    })
  }

  onClick(id){
    this.router.navigate(['../../secretory/fees',id]);
  }

}
