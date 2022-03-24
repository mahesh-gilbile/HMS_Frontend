import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/SharedModule/Validator/confirm_Password.validator';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-mess-change-password',
  templateUrl: './mess-change-password.component.html',
  styleUrls: ['./mess-change-password.component.css']
})
export class MessChangePasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private messService : MessService,
    private router : Router
  ) { }

  passwordData: FormGroup;
  Message: String = null;
  ngOnInit(): void {
    this.passwordData = this.fb.group({
      'currentPassword' : new FormControl(null , [Validators.required]),
      'newPassword' : new FormControl(null , [Validators.required , Validators.minLength(4)]),
      'reEnterNewPassword' : new FormControl(null , [Validators.required])
    },
    {
      validator : ConfirmPasswordValidator("newPassword" , "reEnterNewPassword")
    })
  }

  onSave(){
    if(this.passwordData.valid){
      this.messService.changePassword(this.passwordData.value)
      .subscribe((data) => {
        alert(data);
        this.router.navigate(['./mess'])
      } , error => {
        alert(error.error)
        this.passwordData.reset()
      })
    }else{
      return
    }
  }
}
