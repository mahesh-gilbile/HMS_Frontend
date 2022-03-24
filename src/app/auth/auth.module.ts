import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
