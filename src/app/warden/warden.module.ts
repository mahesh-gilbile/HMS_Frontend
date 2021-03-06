import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";
import { WardenComponent } from "./warden.component";
import { WardenHeaderComponent } from './Warden-Layout/warden-header/warden-header.component';
import { WardenSideNavComponent } from './Warden-Layout/warden-side-nav/warden-side-nav.component';
import { WardenDashboardComponent } from './warden-dashboard/warden-dashboard.component';
import { WardenDutiesComponent } from './warden-duties/warden-duties.component';
import { WardenLeaveInfoComponent } from './warden-leave-info/warden-leave-info.component';
import { WardenHostelInfoComponent } from './WardenHostelInfo/warden-hostel-info/warden-hostel-info.component';
import { WardenChangePasswordComponent } from './warden-change-password/warden-change-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WardenWingInfoComponent } from './WardenHostelInfo/warden-wing-info/warden-wing-info.component';
import { WardenRoomInfoComponent } from './WardenHostelInfo/warden-room-info/warden-room-info.component';
import { WardenStudentInfoComponent } from './WardenHostelInfo/warden-student-info/warden-student-info.component';
import { WardenApplyLeaveComponent } from './warden-apply-leave/warden-apply-leave.component';
import { WardenStudentGateEntryComponent } from './wardenhostelinfo/warden-student-gate-entry/warden-student-gate-entry.component';
import { WardenStudentListComponent } from './warden-student-list/warden-student-list.component';
import { MyPipesModule } from "../SharedModule/sharedModule";

@NgModule({
  declarations:[
    WardenComponent,
    WardenHeaderComponent,
    WardenSideNavComponent,
    WardenDashboardComponent,
    WardenDutiesComponent,
    WardenLeaveInfoComponent,
    WardenHostelInfoComponent,
    WardenChangePasswordComponent,
    WardenWingInfoComponent,
    WardenRoomInfoComponent,
    WardenStudentInfoComponent,
    WardenApplyLeaveComponent,
    WardenStudentGateEntryComponent,
    WardenStudentListComponent,
  ],
  imports:[
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MyPipesModule
  ],
  providers : [
    DatePipe
  ]
})

export class WardenModule { }
