import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/SharedModule/Validator/confirm_Password.validator';
import { SecretoryService } from '../secretory.service';

@Component({
  selector: 'app-secretory-change-password',
  templateUrl: './secretory-change-password.component.html',
  styleUrls: ['./secretory-change-password.component.css']
})
export class SecretoryChangePasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private secretoryService: SecretoryService,
    private router: Router
  ) { }

  passwordData:FormGroup;
  Message: String = null;
  ngOnInit(): void {
    this.passwordData = this.fb.group({
      'currentPassword': new FormControl(null , [Validators.required]),
      'newPassword': new FormControl(null ,[Validators.required , Validators.minLength(4)]),
      'reEnterNewPassword': new FormControl(null , [Validators.required])
    },
    {
      validator : ConfirmPasswordValidator("newPassword" , "reEnterNewPassword")
    }
    )
  }

  onSave(){
    if(this.passwordData.valid){
      this.secretoryService.changePassword(this.passwordData.value)
      .subscribe((data) => {
        alert(data);
        this.router.navigate(['./warden'])
      }, error => {
        alert(error.error);
        this.passwordData.reset();
      })
    }
  }
}
