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
import { SecretoryFeesComponent } from './secretory-fees/secretory-fees.component';
import { SecretoryListStudentComponent } from './secretory-list-student/secretory-list-student.component';
import { MyPipesModule } from "../SharedModule/sharedModule";
import { SecretoryStdRegisterListComponent } from './SecretoryRegister/secretory-std-register-list/secretory-std-register-list.component';
import { SecretoryApproveStdComponent } from './SecretoryRegister/secretory-approve-std/secretory-approve-std.component';
import { SecretoryRoomListComponent } from './secretoryroomop/secretory-room-list/secretory-room-list.component';
import { SecretoryRoomAddComponent } from './secretoryroomop/secretory-room-add/secretory-room-add.component';
import { SecretoryRoomEditComponent } from './secretoryroomop/secretory-room-edit/secretory-room-edit.component';
import { SecretoryRoomAllotmentComponent } from './secretoryroomop/secretory-room-allotment/secretory-room-allotment.component';
import { NotAltStdComponent } from './secretoryroomop/not-alt-std/not-alt-std.component';
import { SecretoryAllStdAllotmentComponent } from './secretory-all-std-allotment/secretory-all-std-allotment.component';

@NgModule({
    declarations : [
        SecretoryComponent,
        SecretoryDashboardComponent,
        SecretoryChangePasswordComponent,
        SecretoryHeaderComponent,
        SecretorySideNavComponent,
        SecretoryApplyLeaveComponent,
        SecretoryFeesComponent,
        SecretoryListStudentComponent,
        SecretoryStdRegisterListComponent,
        SecretoryApproveStdComponent,
        SecretoryRoomListComponent,
        SecretoryRoomAddComponent,
        SecretoryRoomEditComponent,
        SecretoryRoomAllotmentComponent,
        NotAltStdComponent,
        SecretoryAllStdAllotmentComponent
    ],

    imports : [
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

export class SecretoryModule { }