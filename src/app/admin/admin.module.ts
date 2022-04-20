import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";
import { AdminComponent } from "./admin.component";
import { AdminHeaderComponent } from './Admin-Layout/admin-header/admin-header.component';
import { AdminSideNavComponent } from './Admin-Layout/admin-side-nav/admin-side-nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLeaveInfoComponent } from './admin-leave-info/admin-leave-info.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminEmployeeInfoComponent } from './admin-employee-info/admin-employee-info.component';
import { AdminSecretoryInfoComponent } from './admin-employee-info/Admin-Employee/Admin-Secretory/admin-secretory-info/admin-secretory-info.component';
import { AdminAddSecretoryComponent } from './admin-employee-info/Admin-Employee/Admin-Secretory/admin-add-secretory/admin-add-secretory.component';
import { AdminEditSecretoryComponent } from './admin-employee-info/Admin-Employee/Admin-Secretory/admin-edit-secretory/admin-edit-secretory.component';
import { AdminWardenInfoComponent } from './admin-employee-info/Admin-Employee/Admin-Warden/admin-warden-info/admin-warden-info.component';
import { AdminAddWardenComponent } from './admin-employee-info/Admin-Employee/Admin-Warden/admin-add-warden/admin-add-warden.component';
import { AdminEditWardenComponent } from './admin-employee-info/Admin-Employee/Admin-Warden/admin-edit-warden/admin-edit-warden.component';
import { AdminMessStaffInfoComponent } from './admin-employee-info/Admin-Employee/Admin-MessStaff/admin-mess-staff-info/admin-mess-staff-info.component';
import { AdminAddMessStaffComponent } from './admin-employee-info/Admin-Employee/Admin-MessStaff/admin-add-mess-staff/admin-add-mess-staff.component';
import { AdminEditMessStaffComponent } from './admin-employee-info/Admin-Employee/Admin-MessStaff/admin-edit-mess-staff/admin-edit-mess-staff.component';
import { AdminSecurityInfoComponent } from './admin-employee-info/Admin-Employee/Admin-Security/admin-security-info/admin-security-info.component';
import { AdminAddSecurityComponent } from './admin-employee-info/Admin-Employee/Admin-Security/admin-add-security/admin-add-security.component';
import { AdminEditSecurityComponent } from './admin-employee-info/Admin-Employee/Admin-Security/admin-edit-security/admin-edit-security.component';

@NgModule({
    declarations : [
        AdminComponent,
        AdminHeaderComponent,
        AdminSideNavComponent,
        AdminDashboardComponent,
        AdminLeaveInfoComponent,
        AdminChangePasswordComponent,
        AdminEmployeeInfoComponent,
        AdminSecretoryInfoComponent,
        AdminAddSecretoryComponent,
        AdminEditSecretoryComponent,
        AdminWardenInfoComponent,
        AdminAddWardenComponent,
        AdminEditWardenComponent,
        AdminMessStaffInfoComponent,
        AdminAddMessStaffComponent,
        AdminEditMessStaffComponent,
        AdminSecurityInfoComponent,
        AdminAddSecurityComponent,
        AdminEditSecurityComponent,
        
    ],
    imports:[
        CommonModule,
        AppMaterialModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        DatePipe
    ]
})

export class AdminModule { }