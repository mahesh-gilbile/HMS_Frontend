import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
  ) { }

  formData: FormGroup;
  errorMessageEmail = null;
  registerEmail = null;
  stdEmail = null;
  
  gender:any[] = [
    { value : 'MALE' },
    { value : 'FEMALE' },
    { value : 'OTHER'}
  ]

  category:any[] = [
    { value : 'FE' },
    { value : 'SE' },
    { value : 'TE'},
    { value : 'BE' },
    { value : 'FOREGIN' },
    { value : 'HEALTH ISSUES'},
    { value : 'PRIVILEDGE(SINGLE BED)'}
  ]


  ngOnInit(): void {
    this.loadForm();
    this.loadEmail();
  }

  loadEmail(){
    this.sharedService.visibleSpinner(true);
    this.authService.getEmail()
    .subscribe(data => {
      this.registerEmail = data.RegisterEmail;
      this.stdEmail = data.StdEmail;
      this.sharedService.visibleSpinner(false);
    })
  }

  loadForm(){
    this.formData = this.fb.group({
      'StdFN' : new FormControl(null , [Validators.required]),
      'StdMN' : new FormControl(null),
      'StdLN' : new FormControl(null , [Validators.required]),
      'StdGender' : new FormControl(null , [Validators.required]),
      'StdAge' : new FormControl(null , [Validators.required]),
      'StdCitizen' : new FormControl(null , [Validators.required]),
      'StdEmail' : new FormControl(null , [Validators.required , Validators.email]),
      'StdMobileNumber' : new FormControl(null , [Validators.required ,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'StdDOB' : new FormControl(null , [Validators.required]),
      'StdAddress' : new FormControl(null , [Validators.required]),
      'StdCategory' : new FormControl(null , [Validators.required]),
      'StdCourse' : new FormControl(null , [Validators.required]),
      'StdBranch' : new FormControl(null , [Validators.required]),
      'StdCourseDuration' : new FormControl(null , [Validators.required]),
      'StdYear' : new FormControl(null , [Validators.required]),
      'GuardianFN' : new FormControl(null , [Validators.required]),
      'GuardianMN' : new FormControl(null , [Validators.required]),
      'GuardianLN' : new FormControl(null , [Validators.required]),
      'GuardianRelation' : new FormControl(null , [Validators.required]),
      'GuardianGender' : new FormControl(null , [Validators.required]),
      'GuardianAge' : new FormControl(null , [Validators.required]),
      'GuardianOccupation' : new FormControl(null , [Validators.required]),
      'GuardianMobileNumber' : new FormControl(null , [Validators.required ,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'GuardianEmail' : new FormControl(null , [Validators.required , Validators.email]),
      'GuardianDOB' : new FormControl(null , [Validators.required]),
      'GuardianAddress' : new FormControl(null , [Validators.required]),
    })
  }

  onRoute(){
    this.router.navigate(['../auth'])
  }

  calculateAge(){
    const birtdate = new Date(this.formData.get('StdDOB').value)
    const timeDiff = Math.abs(Date.now() - birtdate.getTime())
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.formData.controls.StdAge.setValue(age);
  }

  calculateAgeGuardian(){
    const birtdate = new Date(this.formData.get('GuardianDOB').value)
    const timeDiff = Math.abs(Date.now() - birtdate.getTime())
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.formData.controls.GuardianAge.setValue(age);
  }

  onSave(){
    const check = this.checkMail(this.formData.get('StdEmail').value)
    if(!check && this.formData.valid){
      const sdob = this.formData.get('StdDOB').value
      this.formData.controls.StdDOB.setValue(this.setProperDate(sdob));
      const gdob = this.formData.get('GuardianDOB').value
      this.formData.controls.GuardianDOB.setValue(this.setProperDate(gdob));
      this.authService.register(this.formData.value)
      .subscribe(data => {
        alert(data);
        this.formData.reset();
      })
    }
  }

  setProperDate(date){
    return this.datePipe.transform(date , 'dd/MM/yyyy');
  }

  checkMail(n){
    this.errorMessageEmail = null;
    let flag = false;
    for(let i = 0 ; i < this.registerEmail.length ; i++){
      if( n === this.registerEmail[i].e){
        flag = true;
        this.errorMessageEmail = "Email Already Registered."
      }
    }
    for(let i = 0 ; i < this.stdEmail.length ; i++){
      if( n === this.stdEmail[i].e){
        flag = true;
        this.errorMessageEmail = "Email Already Exists."
      }
    }
    return flag;
  }

}
