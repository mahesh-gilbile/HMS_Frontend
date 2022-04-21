import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';

@Component({
  selector: 'app-admin-add-mess-staff',
  templateUrl: './admin-add-mess-staff.component.html',
  styleUrls: ['./admin-add-mess-staff.component.css']
})
export class AdminAddMessStaffComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
    private adminService: AdminService,
    private sharedService: SharedService
  ) { }

  formData: FormGroup;
  email:any;
  errorMessageAge = null;
  errorMessageEmail = null;
  gender:any[] = [
    { value : 'MALE' },
    { value : 'FEMALE' },
    { value : 'OTHER'}
  ]

  ngOnInit(): void {
    this.loadForm();
    this.getEmail();
  }

  getEmail(){
    this.sharedService.visibleSpinner(true);
    this.adminService.getWardenEmail()
    .subscribe(
      data => {
        this.email = data;
        // console.log(data);
        this.sharedService.visibleSpinner(false);
      }
    )
  }


  loadForm(){
    this.formData = this.fb.group({
      'fn': new FormControl(null , [Validators.required , Validators.minLength(3)]),
      'mn': new FormControl(null),
      'ln': new FormControl(null , [Validators.required , Validators.minLength(3)]),
      'gender': new FormControl(null , [Validators.required]),
      'add': new FormControl(null , [Validators.required]),
      'email': new FormControl(null , [Validators.required , Validators.email]),
      'mobileNo': new FormControl(null , [Validators.required ,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'dob': new FormControl(null , [Validators.required]),
      'age': new FormControl(null , [Validators.required]),
    })
  }

  onSave(){
    const age = +this.formData.get('age').value;
    const check = this.checkMail(this.formData.get('email').value)
    if(age >= 18 && !check){
      this.errorMessageAge = null;
      this.errorMessageEmail = null;
      if(this.formData.valid){
        this.adminService.addMessStaff(this.formData.value , this.setProperDate(this.formData.get('dob').value))
        .subscribe(data => {
          alert(data);
          this.router.navigate(["../../../admin/employeeInfo/messStaffInfo"])
        })
      }
    }else{
      if(age <= 18){
        this.errorMessageAge = "Please Enter Valid Age."
      }
      return
    }
  }

  calculateAge(){
    const birtdate = new Date(this.formData.get('dob').value)
    const timeDiff = Math.abs(Date.now() - birtdate.getTime())
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.formData.controls.age.setValue(age);
  }

  setProperDate(date){
    return this.datePipe.transform(date , 'dd/MM/yyyy');
  }

  checkMail(n){
    this.errorMessageEmail = null;
    let flag = false;
    for(let i = 0 ; i < this.email.length ; i++){
      if( n === this.email[i].e){
        flag = true;
        this.errorMessageEmail = "Email Already Exist."
      }
    }
    return flag;
  }

}
