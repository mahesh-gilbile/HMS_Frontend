import { CommonModule } from "@angular/common";
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

@NgModule({
    declarations : [
        AdminComponent,
        AdminHeaderComponent,
        AdminSideNavComponent,
        AdminDashboardComponent,
        AdminLeaveInfoComponent,
        AdminChangePasswordComponent,
        AdminEmployeeInfoComponent,
        
    ],
    imports:[
        CommonModule,
        AppMaterialModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class AdminModule { }