import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../../admin.service';

@Component({
  selector: 'app-admin-mess-staff-info',
  templateUrl: './admin-mess-staff-info.component.html',
  styleUrls: ['./admin-mess-staff-info.component.css']
})
export class AdminMessStaffInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService,
    private SharedService: SharedService
  ) { }

  messStaffData:any[]
  ngOnInit(): void {
    this.SharedService.visibleSpinner(true);
    this.adminService.getMessStaffsInfo()
    .subscribe(data => {
      this.messStaffData = data;
      // console.log(data);
      this.SharedService.visibleSpinner(false);
    })
  }

  onAddMessStaff(){
    this.router.navigate(['../../../admin/employeeInfo/addMessStaff'])
  }

  onEditRoute(n){
    this.router.navigate(['../../../admin/employeeInfo/editMessStaff',n])
  }

}
