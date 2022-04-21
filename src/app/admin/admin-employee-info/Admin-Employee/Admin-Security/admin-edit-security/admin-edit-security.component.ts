import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';

@Component({
  selector: 'app-admin-edit-security',
  templateUrl: './admin-edit-security.component.html',
  styleUrls: ['./admin-edit-security.component.css']
})
export class AdminEditSecurityComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private sharedService: SharedService
  ) { }

  formData: FormGroup;
  errorMessage = null;
  securityID:any;
  gender:any[] = [
    { value : 'MALE' },
    { value : 'FEMALE' },
    { value : 'OTHER'}
  ]

  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.loadForm();
  }

  loadForm(){
    this.formData = this.fb.group({
      'fn': new FormControl(null , [Validators.required , Validators.minLength(3)]),
      'mn': new FormControl(null),
      'ln': new FormControl(null , [Validators.required , Validators.minLength(3)]),
      'gender': new FormControl(null , [Validators.required]),
      'add': new FormControl(null , [Validators.required]),
      'email': new FormControl({value:null , disabled:true} , [Validators.required , Validators.email]),
      'mobileNo': new FormControl(null , [Validators.required ,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })
    this.getData();
  }

  getData(){
    this.securityID = this.route.snapshot.paramMap.get('id');
    this.adminService.getSecurityInfo(this.securityID)
    .subscribe(data => {
      console.log(data)
      this.formData.controls.fn.setValue(data[1]);
      this.formData.controls.mn.setValue(data[2]);
      this.formData.controls.ln.setValue(data[3]);
      this.formData.controls.gender.setValue(data[4]);
      this.formData.controls.add.setValue(data[10]);
      this.formData.controls.email.setValue(data[6]);
      this.formData.controls.mobileNo.setValue(data[7]);
      this.sharedService.visibleSpinner(false);
    })
  }

  onSave(){
    if(this.formData.valid){
      this.adminService.editSecurity(this.formData.value , this.securityID)
        .subscribe(data => {
          alert(data);
          this.router.navigate(["../../../admin/employeeInfo/securityInfo"])
        })
    }else{
      return
    }
  }

}
