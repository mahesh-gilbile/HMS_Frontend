import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { AdminService } from '../../../../admin.service';

@Component({
  selector: 'app-admin-edit-secretory',
  templateUrl: './admin-edit-secretory.component.html',
  styleUrls: ['./admin-edit-secretory.component.css']
})
export class AdminEditSecretoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
    private adminService: AdminService,
    private sharedService: SharedService
  ) { }

  formData: FormGroup;
  errorMessage = null;
  gender:any[] = [
    { value : 'MALE' },
    { value : 'FEMALE' },
    { value : 'OTHER'}
  ]

  ngOnInit(): void {
    this.loadForm();
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
    if(age >= 18){
      this.errorMessage = null;
      if(this.formData.valid){
        console.log(this.formData.value);
      }
    }else{
      this.errorMessage = "Please Enter Valid Age."
      return
    }
  }

  calculateAge(){
    const birtdate = new Date(this.formData.get('dob').value)
    const timeDiff = Math.abs(Date.now() - birtdate.getTime())
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.formData.controls.age.setValue(age);
  }

  setProperDate(){
    const dob = this.formData.get('dob').value
    this.formData.controls.dob.setValue(this.datePipe.transform(dob , 'dd/MM/yyyy'));
  }

}
