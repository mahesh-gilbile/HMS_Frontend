import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";

import { MessChangePasswordComponent } from "./mess/mess-change-password/mess-change-password.component";
import { MessDashboardComponent } from "./mess/mess-dashboard/mess-dashboard.component";
import { MessMenuComponent } from "./mess/mess-menu/mess-menu.component";
import { MessQRComponent } from "./mess/mess-qr/mess-qr.component";
import { MessWeeklyMenuComponent } from "./mess/mess-weekly-menu/mess-weekly-menu.component";
import { MessComponent } from "./mess/mess.component";
import { SecurityChangePasswordComponent } from "./security/security-change-password/security-change-password.component";

import { SecurityDashbaordComponent } from "./security/security-dashbaord/security-dashbaord.component";
import { SecurityQRComponent } from "./security/security-qr/security-qr.component";
import { SecurityComponent } from "./security/security.component";

import { StudentChangePasswordComponent } from "./student/student-change-password/student-change-password.component";
import { StudentDashboardComponent } from "./student/student-dashboard/student-dashboard.component";
import { StudentFeesDetailsComponent } from "./student/student-fees-details/student-fees-details.component";
import { StudentGuardianDetailsComponent } from "./student/student-guardian-details/student-guardian-details.component";
import { StudentMessDetailsComponent } from "./student/student-mess-details/student-mess-details.component";
import { StudentQRScannerComponent } from "./student/student-qrscanner/student-qrscanner.component";
import { StudentRoomDetailsComponent } from "./student/student-room-details/student-room-details.component";
import { StudentWeekMenuComponent } from "./student/student-week-menu/student-week-menu.component";
import { StudentComponent } from "./student/student.component";

import { WardenChangePasswordComponent } from "./warden/warden-change-password/warden-change-password.component";
import { WardenDashboardComponent } from "./warden/warden-dashboard/warden-dashboard.component";
import { WardenDutiesComponent } from "./warden/warden-duties/warden-duties.component";
import { WardenHostelInfoComponent } from "./warden/WardenHostelInfo/warden-hostel-info/warden-hostel-info.component";
import { WardenLeaveInfoComponent } from "./warden/warden-leave-info/warden-leave-info.component";
import { WardenComponent } from "./warden/warden.component";
import { WardenWingInfoComponent } from "./warden/WardenHostelInfo/warden-wing-info/warden-wing-info.component";
import { WardenRoomInfoComponent } from "./warden/WardenHostelInfo/warden-room-info/warden-room-info.component";
import { SecretoryComponent } from "./secretory/secretory.component";
import { SecretoryDashboardComponent } from "./secretory/secretory-dashboard/secretory-dashboard.component";
import { SecretoryChangePasswordComponent } from "./secretory/secretory-change-password/secretory-change-password.component";
import { SecretoryApplyLeaveComponent } from "./secretory/secretory-apply-leave/secretory-apply-leave.component";
import { WardenStudentInfoComponent } from "./warden/WardenHostelInfo/warden-student-info/warden-student-info.component";
import { MessApplyLeaveComponent } from "./mess/mess-apply-leave/mess-apply-leave.component";
import { SecurityApplyLeaveComponent } from "./security/security-apply-leave/security-apply-leave.component";
import { WardenApplyLeaveComponent } from "./warden/warden-apply-leave/warden-apply-leave.component";
import { StudentMessHistoryDetailsComponent } from "./student/student-mess-history-details/student-mess-history-details.component";
import { StudentGateHistoryComponent } from "./student/student-gate-history/student-gate-history.component";
import { MessTodayHistoryComponent } from "./mess/mess-today-history/mess-today-history.component";
import { MessQrHistoryComponent } from "./mess/mess-qr-history/mess-qr-history.component";
import { SecurityQrHistoryComponent } from "./security/security-qr-history/security-qr-history.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { AdminChangePasswordComponent } from "./admin/admin-change-password/admin-change-password.component";
import { AdminLeaveInfoComponent } from "./admin/admin-leave-info/admin-leave-info.component";
import { AdminEmployeeInfoComponent } from "./admin/admin-employee-info/admin-employee-info.component";

const appRoutes: Routes = [
  { path: '' , redirectTo: 'auth' , pathMatch: 'full'},
  { path: 'auth' , component: AuthComponent },
  { path: 'warden' , component: WardenComponent ,children:[
    { path: '' , component: WardenDashboardComponent , data : { title: 'Personal Details'}},
    { path: 'allotedDuties' , component: WardenDutiesComponent , data : { title: 'Alloted Duties'}},
    { path: 'hostelInfo' , component: WardenHostelInfoComponent , data: { title: 'Hostel Information'}},
    { path: 'wingInfo/:id' , component: WardenWingInfoComponent , data: { title: 'Wing Information'}},
    { path: 'roomInfo/:id' , component: WardenRoomInfoComponent , data: { title: 'Room Information'}},
    { path: 'stdInfo/:id' , component: WardenStudentInfoComponent , data: { title: 'Student Information'}},
    { path: 'leaveInfo' , component: WardenLeaveInfoComponent , data: { title: 'Leave Information'}},
    { path : 'changepassword' , component: WardenChangePasswordComponent , data: { title : 'Change Password'}},
    { path: 'leaves' , component: WardenApplyLeaveComponent , data : { title : 'Leaves Information'}}
  ]},
  { path: 'mess' , component: MessComponent ,children :[
    { path : '' , component: MessDashboardComponent , data : { title : 'Personal Details'}},
    { path : 'QR' , component: MessQRComponent , data : { title : 'QR CODE'}},
    { path : 'menu' , component: MessMenuComponent , data : { title : 'Menu'}},
    { path : 'menu/:type' , component: MessWeeklyMenuComponent , data : { title : 'Menu'}},
    { path : 'changepassword' , component: MessChangePasswordComponent , data: { title : 'Change Password'}},
    { path: 'leaves' , component: MessApplyLeaveComponent , data : { title : 'Leaves Information'}},
    { path: 'todayHistory' , component: MessTodayHistoryComponent , data : { title : "Mess Today's History"}},
    { path: 'qrHistory' , component: MessQrHistoryComponent , data : { title : "Mess QR History"}}
  ]},
  { path: 'security' , component: SecurityComponent ,children:[
    { path : '' , component: SecurityDashbaordComponent , data : { title : 'Personal Details'}},
    { path : 'QR' , component: SecurityQRComponent , data: { title : 'QR CODE'}},
    { path : 'changepassword' , component: SecurityChangePasswordComponent , data: { title : 'Change Password'}},
    { path: 'leaves' , component: SecurityApplyLeaveComponent , data : { title : 'Leaves Information'}},
    { path: 'qrHistory' , component: SecurityQrHistoryComponent , data : { title : "Security QR History"}}
  ]},
  { path: 'student' , component: StudentComponent ,children : [
    { path: '' , component: StudentDashboardComponent , data : { title : 'Student Information'}},
    { path: 'qrscanner' , component: StudentQRScannerComponent , data : { title : 'QR Scanner'}},
    { path: 'changepassword' , component: StudentChangePasswordComponent , data : { title : 'Change Password'}},
    { path: 'guardian' , component: StudentGuardianDetailsComponent , data : { title : 'Guardian Information'}},
    { path: 'mess' , component: StudentMessDetailsComponent , data : { title : 'Mess Details'}},
    { path: 'room' , component: StudentRoomDetailsComponent , data : { title : 'Room Details'}},
    { path: 'fees' , component: StudentFeesDetailsComponent , data : { title : 'Fees Details'}},
    { path : 'weekly_menu' , component: StudentWeekMenuComponent , data : { title : 'Mess Details'}},
    { path : 'messHistory' , component: StudentMessHistoryDetailsComponent , data : { title : 'Mess History'}},
    { path : 'gateHistory' , component: StudentGateHistoryComponent , data : { title : 'Check In-Out History'}}
  ]},
  { path: 'secretory' , component: SecretoryComponent , children : [
    { path: '' , component: SecretoryDashboardComponent , data : { title : 'Personal Details'}},
    { path: 'changepassword' , component: SecretoryChangePasswordComponent , data : { title : 'Change Password'}},
    { path: 'leaves' , component: SecretoryApplyLeaveComponent , data : { title : 'Leaves Information'}}
  ]},
  { path: 'admin' , component: AdminComponent , children: [
    { path : '' , component: AdminDashboardComponent , data : { title : 'Personal Details'}},
    { path: 'changepassword' , component: AdminChangePasswordComponent , data : { title : 'Change Password'}},
    { path: 'leaveInfo' , component: AdminLeaveInfoComponent , data : { title : 'Leave Information'}},
    { path: 'employeeInfo' , component: AdminEmployeeInfoComponent , data : { title : 'Employee Information'}}
  ]},
  {path : 'home' , component: HomeComponent}
]

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes , {useHash: true})
  ],
  exports :[
    RouterModule
  ]
})

export class AppRoutingModule {}