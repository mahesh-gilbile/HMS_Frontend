import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StudentComponent } from "./student.component";
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AppMaterialModule } from "../app-material.module";
import { StudentSideNavComponent } from "./Student-Layout/student-side-nav/student-side-nav.component";
import { StudentHeaderComponent } from './Student-Layout/student-header/student-header.component';
import { StudentChangePasswordComponent } from './student-change-password/student-change-password.component';
import { RouterModule } from "@angular/router";
import { StudentGuardianDetailsComponent } from './student-guardian-details/student-guardian-details.component';
import { StudentMessDetailsComponent } from './student-mess-details/student-mess-details.component';
import { StudentRoomDetailsComponent } from './student-room-details/student-room-details.component';
import { StudentFeesDetailsComponent } from './student-fees-details/student-fees-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentWeekMenuComponent } from './student-week-menu/student-week-menu.component';
import { shortStringPipe } from "../SharedModule/Pipe/shortstring.pipe";
import { StudentQRScannerComponent } from './student-qrscanner/student-qrscanner.component';
import { StudentMessHistoryDetailsComponent } from './student-mess-history-details/student-mess-history-details.component';
import { StudentGateHistoryComponent } from './student-gate-history/student-gate-history.component';

@NgModule({
  declarations : [
    StudentComponent,
    StudentSideNavComponent,
    StudentDashboardComponent,
    StudentHeaderComponent,
    StudentChangePasswordComponent,
    StudentGuardianDetailsComponent,
    StudentMessDetailsComponent,
    StudentRoomDetailsComponent,
    StudentFeesDetailsComponent,
    StudentWeekMenuComponent,
    shortStringPipe,
    StudentQRScannerComponent,
    StudentMessHistoryDetailsComponent,
    StudentGateHistoryComponent
  ],
  imports : [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class StudentModule { }
