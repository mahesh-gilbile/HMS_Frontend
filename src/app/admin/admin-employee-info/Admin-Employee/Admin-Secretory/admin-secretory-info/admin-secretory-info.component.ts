import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-secretory-info',
  templateUrl: './admin-secretory-info.component.html',
  styleUrls: ['./admin-secretory-info.component.css']
})
export class AdminSecretoryInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  secretoryData:any[]
  ngOnInit(): void {
    this.secretoryData = [
      { id : '1' , name : 'mahesh'},
      { id : '2' , name : 'ramesh'},
      { id : '3' , name : 'rajesh'},
    ]
  }

  onAddSecretory(){
    this.router.navigate(['../../../admin/employeeInfo/addSecretory'])
  }

  onEditRoute(n){
    console.log(n)
    this.router.navigate(['../../../admin/employeeInfo/editSecretory',n])
  }


}
