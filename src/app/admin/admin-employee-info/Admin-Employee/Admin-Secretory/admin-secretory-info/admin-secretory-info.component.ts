import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../../admin.service';

@Component({
  selector: 'app-admin-secretory-info',
  templateUrl: './admin-secretory-info.component.html',
  styleUrls: ['./admin-secretory-info.component.css']
})
export class AdminSecretoryInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService,
    private SharedService: SharedService
  ) { }

  secretoryData:any[]
  ngOnInit(): void {
    this.SharedService.visibleSpinner(true);
    this.adminService.getSecretoriesInfo()
    .subscribe(data => {
      this.secretoryData = data;
      // console.log(data);
      this.SharedService.visibleSpinner(false);
    })
  }

  onAddSecretory(){
    this.router.navigate(['../../../admin/employeeInfo/addSecretory'])
  }

  onEditRoute(n){
    // console.log(n)
    this.router.navigate(['../../../admin/employeeInfo/editSecretory',n])
  }


}
