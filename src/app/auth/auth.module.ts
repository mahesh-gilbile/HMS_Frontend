import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRegisterComponent } from './student-register/student-register.component';



@NgModule({
  declarations: [
    AuthComponent,
    StudentRegisterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    DatePipe
  ]
})
export class AuthModule { }
