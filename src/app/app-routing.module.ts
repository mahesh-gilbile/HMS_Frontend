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
import { AdminSecretoryInfoComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Secretory/admin-secretory-info/admin-secretory-info.component";
import { AdminAddSecretoryComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Secretory/admin-add-secretory/admin-add-secretory.component";
import { AdminEditSecretoryComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Secretory/admin-edit-secretory/admin-edit-secretory.component";
import { AdminAddWardenComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Warden/admin-add-warden/admin-add-warden.component";
import { AdminEditWardenComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Warden/admin-edit-warden/admin-edit-warden.component";
import { AdminWardenInfoComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Warden/admin-warden-info/admin-warden-info.component";
import { AdminMessStaffInfoComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-MessStaff/admin-mess-staff-info/admin-mess-staff-info.component";
import { AdminAddMessStaffComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-MessStaff/admin-add-mess-staff/admin-add-mess-staff.component";
import { AdminEditMessStaffComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-MessStaff/admin-edit-mess-staff/admin-edit-mess-staff.component";
import { AdminAddSecurityComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Security/admin-add-security/admin-add-security.component";
import { AdminEditSecurityComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Security/admin-edit-security/admin-edit-security.component";
import { AdminSecurityInfoComponent } from "./admin/admin-employee-info/Admin-Employee/Admin-Security/admin-security-info/admin-security-info.component";
import { WardenStudentGateEntryComponent } from "./warden/wardenhostelinfo/warden-student-gate-entry/warden-student-gate-entry.component";
import { SecretoryFeesComponent } from "./secretory/secretory-fees/secretory-fees.component";
import { SecretoryListStudentComponent } from "./secretory/secretory-list-student/secretory-list-student.component";
import { WardenStudentListComponent } from "./warden/warden-student-list/warden-student-list.component";
import { StudentRegisterComponent } from "./auth/student-register/student-register.component";
import { SecretoryStdRegisterListComponent } from "./secretory/SecretoryRegister/secretory-std-register-list/secretory-std-register-list.component";
import { SecretoryApproveStdComponent } from "./secretory/SecretoryRegister/secretory-approve-std/secretory-approve-std.component";
import { SecretoryRoomListComponent } from "./secretory/secretoryroomop/secretory-room-list/secretory-room-list.component";
import { SecretoryRoomAddComponent } from "./secretory/secretoryroomop/secretory-room-add/secretory-room-add.component";
import { SecretoryRoomAllotmentComponent } from "./secretory/secretoryroomop/secretory-room-allotment/secretory-room-allotment.component";

const appRoutes: Routes = [
  { path: '' , redirectTo: 'auth' , pathMatch: 'full'},
  { path: 'auth' , component: AuthComponent },
  { path: 'stdRegister' , component: StudentRegisterComponent },
  { path: 'warden' , component: WardenComponent ,children:[
    { path: '' , component: WardenDashboardComponent , data : { title: 'Personal Details'}},
    { path: 'allotedDuties' , component: WardenDutiesComponent , data : { title: 'Alloted Duties'}},
    { path: 'hostelInfo' , component: WardenHostelInfoComponent , data: { title: 'Hostel Information'}},
    { path: 'wingInfo/:id' , component: WardenWingInfoComponent , data: { title: 'Wing Information'}},
    { path: 'roomInfo/:id' , component: WardenRoomInfoComponent , data: { title: 'Room Information'}},
    { path: 'stdInfo/:id' , component: WardenStudentInfoComponent , data: { title: 'Student Information'}},
    { path: 'leaveInfo' , component: WardenLeaveInfoComponent , data: { title: 'Leave Information'}},
    { path : 'changepassword' , component: WardenChangePasswordComponent , data: { title : 'Change Password'}},
    { path: 'leaves' , component: WardenApplyLeaveComponent , data : { title : 'Leaves Information'}},
    { path: 'gateHistory/:id' , component: WardenStudentGateEntryComponent , data : { title : 'Gate Entry Information'}},
    { path: 'stdList' , component: WardenStudentListComponent , data : { title : 'Student List'}}
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
    { path: 'leaves' , component: SecretoryApplyLeaveComponent , data : { title : 'Leaves Information'}},
    { path: 'stdList' , component: SecretoryListStudentComponent , data : { title : 'Student Information'}},
    { path: 'fees/:id' , component: SecretoryFeesComponent , data : { title : 'Fees Details'}},
    { path: 'stdRegisterList' , component: SecretoryStdRegisterListComponent , data : { title : 'Register Student List'}},
    { path: 'stdRegisterApprove/:id' , component: SecretoryApproveStdComponent , data : { title : 'Register Student Information'}},
    { path: 'roomList' , component: SecretoryRoomListComponent , data : { title : 'Hostel Room List'}},
    { path: 'addRoom' , component: SecretoryRoomAddComponent , data : { title : 'Add Hostel Room List'}},
    { path: 'roomalt/:id' , component: SecretoryRoomAllotmentComponent , data : { title : 'Room Allotment to Student'}},
  ]},
  { path: 'admin' , component: AdminComponent , children: [
    { path : '' , component: AdminDashboardComponent , data : { title : 'Personal Details'}},
    { path: 'changepassword' , component: AdminChangePasswordComponent , data : { title : 'Change Password'}},
    { path: 'leaveInfo' , component: AdminLeaveInfoComponent , data : { title : 'Leave Information'}},
    { path: 'employeeInfo' , component: AdminEmployeeInfoComponent , data : { title : 'Employee Information'}},
    { path: 'employeeInfo/secretoryInfo' , component: AdminSecretoryInfoComponent , data : { title : 'Secretory Information'}},
    { path: 'employeeInfo/addSecretory' , component: AdminAddSecretoryComponent , data : { title : 'Add Secretory Information'}},
    { path: 'employeeInfo/editSecretory/:id' , component: AdminEditSecretoryComponent , data : { title : 'Edit Secretory Information'}},
    { path: 'employeeInfo/wardenInfo' , component: AdminWardenInfoComponent , data : { title : 'Warden Information'}},
    { path: 'employeeInfo/addWarden' , component: AdminAddWardenComponent , data : { title : 'Add Warden Information'}},
    { path: 'employeeInfo/editWarden/:id' , component: AdminEditWardenComponent , data : { title : 'Edit Warden Information'}},
    { path: 'employeeInfo/messStaffInfo' , component: AdminMessStaffInfoComponent , data : { title : 'Mess Staff Information'}},
    { path: 'employeeInfo/addMessStaff' , component: AdminAddMessStaffComponent , data : { title : 'Add Mess Staff Information'}},
    { path: 'employeeInfo/editMessStaff/:id' , component: AdminEditMessStaffComponent , data : { title : 'Edit Mess Staff Information'}},
    { path: 'employeeInfo/securityInfo' , component: AdminSecurityInfoComponent , data : { title : 'Security Guard Information'}},
    { path: 'employeeInfo/addSecurity' , component: AdminAddSecurityComponent , data : { title : 'Add Security Guard Information'}},
    { path: 'employeeInfo/editSecurity/:id' , component: AdminEditSecurityComponent , data : { title : 'Edit Security Guard Information'}}
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