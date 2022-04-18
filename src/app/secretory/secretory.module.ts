import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";
import { SecretoryComponent } from "./secretory.component";
import { SecretoryDashboardComponent } from './secretory-dashboard/secretory-dashboard.component';
import { SecretoryChangePasswordComponent } from './secretory-change-password/secretory-change-password.component';
import { SecretoryHeaderComponent } from './Secretory-Layout/secretory-header/secretory-header.component';
import { SecretorySideNavComponent } from './Secretory-Layout/secretory-side-nav/secretory-side-nav.component';
import { SecretoryApplyLeaveComponent } from './secretory-apply-leave/secretory-apply-leave.component';

@NgModule({
    declarations : [
        SecretoryComponent,
        SecretoryDashboardComponent,
        SecretoryChangePasswordComponent,
        SecretoryHeaderComponent,
        SecretorySideNavComponent,
        SecretoryApplyLeaveComponent
    ],

    imports : [
        CommonModule,
        AppMaterialModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers : [
        DatePipe
    ]
})

export class SecretoryModule { }