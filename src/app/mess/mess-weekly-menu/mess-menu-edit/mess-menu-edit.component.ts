import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../../mess.service';
import { MessWeeklyMenuComponent } from '../mess-weekly-menu.component';

@Component({
  selector: 'app-mess-menu-edit',
  templateUrl: './mess-menu-edit.component.html',
  styleUrls: ['./mess-menu-edit.component.css']
})
export class MessMenuEditComponent implements OnInit {

  id:any;
  menu = {
    id: '',
    day: '',
    type: '',
    menu: '',
    description: ''
  }
  errorMessage:any = null;
  disable = true;
  constructor(
    private messServices : MessService,
    public dialogRef: MatDialogRef<MessWeeklyMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.n;
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.disable = true;
    this.messServices.getSingleMenu(this.id)
    .subscribe(data => {
      this.menu.id = data.Mess_Menu[0].MM_ID;
      this.menu.day = data.Mess_Menu[0].Day;
      this.menu.type = data.Mess_Menu[0].Food_Type;
      this.menu.menu = data.Mess_Menu[0].Food_Menu;
      this.menu.description = data.Mess_Menu[0].Food_Description;
      this.disable = false;
    })
  }

  onSave(){
    this.disable = true;
    if(this.menu.menu.length < 5 || this.menu.description.length < 5){
      this.errorMessage = "Please Enter Valid text";
      this.disable = false;
    }else{
      this.errorMessage = null;
      this.messServices.updateMenu(this.menu)
      .subscribe(result => {
        // console.log(result);
        if(result === 'Updated Successfully...!'){
          this.onBack();
        }
        this.disable = false;
      },error => {
        console.log(error);
        this.disable = false;
      })
    }
  }

  onBack(){
    this.dialogRef.close();
  }

}
