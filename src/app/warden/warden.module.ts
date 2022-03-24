import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";
import { WardenComponent } from "./warden.component";
import { WardenHeaderComponent } from './Warden-Layout/warden-header/warden-header.component';
import { WardenSideNavComponent } from './Warden-Layout/warden-side-nav/warden-side-nav.component';
import { WardenDashboardComponent } from './warden-dashboard/warden-dashboard.component';
import { WardenDutiesComponent } from './warden-duties/warden-duties.component';
import { WardenLeaveInfoComponent } from './warden-leave-info/warden-leave-info.component';
import { WardenHostelInfoComponent } from './warden-hostel-info/warden-hostel-info.component';
import { WardenChangePasswordComponent } from './warden-change-password/warden-change-password.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    WardenComponent,
    WardenHeaderComponent,
    WardenSideNavComponent,
    WardenDashboardComponent,
    WardenDutiesComponent,
    WardenLeaveInfoComponent,
    WardenHostelInfoComponent,
    WardenChangePasswordComponent
  ],
  imports:[
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class WardenModule { }
