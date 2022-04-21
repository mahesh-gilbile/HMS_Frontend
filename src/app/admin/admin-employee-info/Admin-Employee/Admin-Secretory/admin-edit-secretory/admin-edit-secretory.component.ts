import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private adminService: AdminService,
    private sharedService: SharedService
  ) { }

  formData: FormGroup;
  errorMessage = null;
  secretoryID:any;
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
    this.secretoryID = this.route.snapshot.paramMap.get('id');
    this.adminService.getSecretoryInfo(this.secretoryID)
    .subscribe(data => {
      this.formData.controls.fn.setValue(data[1]);
      this.formData.controls.mn.setValue(data[2]);
      this.formData.controls.ln.setValue(data[3]);
      this.formData.controls.gender.setValue(data[5]);
      this.formData.controls.add.setValue(data[9]);
      this.formData.controls.email.setValue(data[6]);
      this.formData.controls.mobileNo.setValue(data[7]);
      this.sharedService.visibleSpinner(false);
    })
  }

  onSave(){
    if(this.formData.valid){
      this.adminService.editSecretory(this.formData.value , this.secretoryID)
        .subscribe(data => {
          alert(data);
          this.router.navigate(["../../../admin/employeeInfo/secretoryInfo"])
        })
    }else{
      return
    }
  }
}
