import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/SharedModule/Validator/confirm_Password.validator';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-security-change-password',
  templateUrl: './security-change-password.component.html',
  styleUrls: ['./security-change-password.component.css']
})
export class SecurityChangePasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private securityService : SecurityService,
    private router : Router
  ) { }

  passwordData: FormGroup;
  Message: String = null;
  ngOnInit(): void {
    this.passwordData = this.fb.group({
      'currentPassword': new FormControl(null, [Validators.required]),
      'newPassword': new FormControl(null , [Validators.required , Validators.minLength(4)]),
      'reEnterNewPassword': new FormControl(null , [Validators.required])
    },
    {
      validator : ConfirmPasswordValidator("newPassword" , "reEnterNewPassword")
    })
  }

  onSave(){
    if(this.passwordData.valid){
      this.securityService.changePassword(this.passwordData.value)
      .subscribe((data) => {
        alert(data);
        this.router.navigate(['./security'])
      } , error => {
        alert(error.error);
        this.passwordData.reset();
      })
    }else{
      return
    }
  }

}
